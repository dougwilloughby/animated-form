/**
 * Created by willo on 2/21/2017.
 */
import React, {Component, PropTypes} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class PropertyUse extends Component {

  onChange(e, v) {
    this.props.onNext(v);
  }
  
  render() {

    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          This property will be used as a?
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style}}>
          <RadioButtonGroup name="propertyUse" defaultSelected={this.props.propertyUse} style={{paddingTop: '2em'}} onChange={this.onChange.bind(this)} >
            <RadioButton id={this.props.id}
                         value="primary"
                         label="Primary Home"
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="second"
                         label="Second Home"
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="investment"
                         label="Investment Home"
                         labelStyle={{width: 'auto'}} />
          </RadioButtonGroup>
        </div>
      </div>
    )
  }
}

PropertyUse.propTypes = {
  id: PropTypes.string.isRequired,
  propertyUse: PropTypes.string,
  onNext: PropTypes.func.isRequired
};

export default wrapFormComponent(PropertyUse);
