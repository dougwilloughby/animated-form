/**
 * Created by willo on 2/21/2017.
 */
import React, {Component, PropTypes} from 'react';


import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class ExpectedOwnership extends Component {

  onChange(e, v) {
    this.props.onNext(v);
  }

  render() {

    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          How long do you plan to own this property?
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style}}>
          <RadioButtonGroup name="expectedOwnership" defaultSelected={this.props.expectedOwnership} style={{paddingTop: '2em'}} onChange={this.onChange.bind(this)}>
            <RadioButton id={this.props.id}value="fiveTo7"
                         label="5 to 7 Yrs"
                         labelStyle={{width: 'auto'}}/>
            <RadioButton value="lessThan15"
                         label="Less than 15 Yrs"
                         labelStyle={{width: 'auto'}}/>
            <RadioButton value="moreThan15"
                         label="More than 15 Yrs"
                         labelStyle={{width: 'auto'}}/>
            <RadioButton value="NotSure"
                         label="Not Sure"
                         labelStyle={{width: 'auto'}}/>
          </RadioButtonGroup>

        </div>
      </div>
    )
  }
}

ExpectedOwnership.propTypes = {
  id: PropTypes.string.isRequired,
  expectedOwnership: PropTypes.string,
  onNext: PropTypes.func.isRequired
};

export default wrapFormComponent(ExpectedOwnership);
