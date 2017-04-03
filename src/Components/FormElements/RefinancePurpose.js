/**
 * Created by willo on 2/28/2017.
 */

import React, {Component, PropTypes} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class RefinancePurpose extends Component {


  onChange(e, value) {
    this.props.onNext(value);
  }


  render() {

    return (

      <div style={{...this.props.style}}>
        <div style={{fontSize: '28px'}}>
          Why do you want to refinance?
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <RadioButtonGroup name="refinancePurpose" defaultSelected={this.props.refinancePurpose} onChange={this.onChange.bind(this)} style={{paddingTop: '1em'}}>
            <RadioButton id={this.props.id}
                         value="lowerPayments"
                         label="Lower mortgage rate or payments"
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="cashOut"
                         label="Tap into equity or cash out"
                         labelStyle={{width: 'auto'}}/>
          </RadioButtonGroup>

        </div>
      </div>
    )
  }
}

RefinancePurpose.propTypes = {
  id: PropTypes.string.isRequired,
  refinancePurpose: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired
};


export default wrapFormComponent(RefinancePurpose);