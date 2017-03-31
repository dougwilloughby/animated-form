/**
 * Created by willo on 2/21/2017.
 */
import React, {Component, PropTypes} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class LoanType extends Component {

  onChange(e, v) {
    this.props.onNext(v);
  }


  render() {
    
    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          What to you want to do?
        </div>
        <div style={{display: 'flex', justifyContent: 'center', ...this.props.style}}>
          <RadioButtonGroup name="loanType" defaultSelected={this.props.loanType} style={{paddingTop: '2em'}} onChange={this.onChange.bind(this)} >
            <RadioButton id={this.props.id}
                         value="purchase"
                          label="Purchase"  autoFocus={true} />
            <RadioButton value="refinance"
                          label="Refinance" />
          </RadioButtonGroup>
        </div>
      </div>
    )
  }
}

LoanType.propTypes = {
  id: PropTypes.string.isRequired,
  loanType: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired
};

export default wrapFormComponent(LoanType);
