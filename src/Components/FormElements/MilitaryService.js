/**
 * Created by willo on 2/23/2017.
 */
import React, {Component, PropTypes} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class MilitaryService extends Component {

  onChange(e, v) {
    this.props.onNext(v);
  }


  render() {

    return (

      <div style={{...this.props.style}}>
        <div style={{fontSize: '28px'}}>
          Are you a United States Veteran?
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <RadioButtonGroup name="militaryService" defaultSelected={this.props.militaryService} style={{paddingTop: '1em'}} onChange={this.onChange.bind(this)} >
            <RadioButton id={this.props.id}
                         value="yes"
                         label="Yes"
                         labelStyle={{width: 'auto'}} />
            <RadioButton value="no"
                         label="No"
                         labelStyle={{width: 'auto'}} />
          </RadioButtonGroup>

        </div>
      </div>
    )
  }
}

MilitaryService.propTypes = {
  id: PropTypes.string.isRequired,
  militaryService: PropTypes.string,
  onNext: PropTypes.func.isRequired
};


export default wrapFormComponent(MilitaryService);
