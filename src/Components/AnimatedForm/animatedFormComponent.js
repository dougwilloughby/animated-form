/**
 * Created by willo on 3/2/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function animatedFormComponent(FormComponent)  {

  const formComponentClassName = FormComponent.displayName || FormComponent.name || 'FormComponent';

  class AnimationWrapper extends Component {
    static displayName = `WrappedFormComponent(${formComponentClassName})` ;

    constructor(props) {
      super(props);

      this.divRef = null;
      this.hasFocus = false;
    }
    
    onFocus() {
      this.hasFocus = true;
      this.divRef && this.divRef.scrollIntoViewIfNeeded(true);
      console.log(this.props.id, "has focus")
    }
    
    onBlur() {
      this.hasFocus = false;
    }



    render() {

      // The whole intent of the following is to scale elements up as they approach the middle
      // of the container's visible contents.
      let scale = 1;
      let containerHeight, containerCenter = 0;
      if (this.props.containerBottom && this.props.containerTopOffset) {
        containerHeight = this.props.containerBottom - this.props.containerTopOffset;
        containerCenter = (containerHeight / 2 ) + this.props.containerTopOffset;
      }
      
      if (this.divRef !== null) {
        let elementBounds = this.divRef.getBoundingClientRect();
        let elementCenter = (elementBounds.height / 2) + elementBounds.top;
        let percentToMiddle = Math.abs((containerCenter - elementCenter)) / (containerHeight / 2);
        scale = 1.25 - percentToMiddle;
        if (scale < 1) scale = 1;
      }

      let scaleStr =  "scale("+ scale + "," + scale + ")";


      if (this.props.hide) return null;

      const { style, ...passThroughProps } = this.props;
      return(
        <div style={{textAlign: 'center', paddingTop: '10%', paddingBottom: '30%'}}>
          <div ref={(divRef) => {this.divRef = divRef;}} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)()}>
            <FormComponent style={{...style, transform: scaleStr}} {...passThroughProps}/>
          </div>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return({
      animatedForm: state.animatedForm
    });
  }

  return connect(mapStateToProps)(animatedFormComponent);

};

