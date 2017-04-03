/**
 * Created by willo on 2/21/2017.
 */
import React, {Component, PropTypes} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';


class PropertyType extends Component {

  onChange(e, v) {
    this.props.onNext(v);
  }

  render() {

    return (

      <div style={{...this.props.style}}>
        <div style={{fontSize: '28px'}}>
          What type of property is it?
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <RadioButtonGroup  id={this.props.id} name="loanType" defaultSelected={this.props.propertyType} style={{paddingTop: '1em'}} onChange={this.onChange.bind(this)} >
            <RadioButton id={this.props.id}
                         value="singleFamily"
                         label="Single Family"
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="condo"
                         label="Condominium" 
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="multiUnit"
                         label="Multi-unit"
                         labelStyle={{width: 'auto'}} />
          </RadioButtonGroup>
        </div>
      </div>
    )
  }
}

PropertyType.propTypes = {
  id: PropTypes.string.isRequired,
  propertyType: PropTypes.string,
  onNext: PropTypes.func.isRequired
};

export default wrapFormComponent(PropertyType);
