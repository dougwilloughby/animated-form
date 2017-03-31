/**
 * Created by willo on 2/21/2017.
 */
import React, {Component, PropTypes} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class ArmOkay extends Component {

  onChange(e, v) {
    this.props.onNext(v);
  }


  render() {

    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          Are you comfortable with an adjustable rate loan?
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style}}>
          <RadioButtonGroup name="armOkay" defaultSelected={this.props.armOkay} style={{paddingTop: '2em'}} onChange={this.onChange.bind(this)}>
            <RadioButton id={this.props.id}
                         value="yes"
                         label="Yes"
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="no"
                         label="No"
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="notSure"
                         label="Not Sure"
                         labelStyle={{width: 'auto'}} />
          </RadioButtonGroup>

        </div>
      </div>
    )
  }
}

ArmOkay.propTypes = {
  id: PropTypes.string.isRequired,
  armOkay: PropTypes.string.isRequired,
  onNext: PropTypes.func
};


export default wrapFormComponent(ArmOkay);
