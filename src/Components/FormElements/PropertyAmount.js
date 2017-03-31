/**
 * Created by willo on 2/28/2017.
 */
import React, {Component, PropTypes} from 'react';
import bindAll from 'lodash/bindAll';

import TextField from 'material-ui/TextField';
import CmmRaisedButton from '../../Components/MaterialUI/CmmRaisedButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class PropertyAmount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      propertyAmount: undefined,
      propertyAmountErrorMsg: '',

      propertyValueOkay: false
    };

    bindAll(this, 'onPropertyAmountChange', 'blurPropertyAmount', 'onNext');

  }



  componentDidMount() {
    if (typeof this.props.propertyAmount !== 'undefined') {
      this.setState({
        propertyAmount: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0
        }).format(this.props.propertyAmount)
      });
    }  else {
      this.setState({propertyAmount: undefined})
    }
  }

  componentWillReceiveProps(nextProps) {
    if (typeof this.props.propertyAmount !== 'undefined' && nextProps.propertyAmount !== this.props.propertyAmount) {
      this.setState({
        propertyAmount: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0
        }).format(this.props.propertyAmount)
      });
    }
  }
  

  formatCurrency(input) {
    return (input.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").replace(/^/, '$'));
  }

  onPropertyAmountChange(e) {
    this.setState({propertyAmount: this.formatCurrency(e.target.value)});
    if (Number(e.target.value.replace(/[^0-9]/g, '')) >= 10000) {
      this.setState({propertyAmountErrorMsg: "", propertyValueOkay: true})
    }
  }

  blurPropertyAmount() {
    if (typeof this.props.propertyAmount !== 'undefined') {
      this.setState({propertyAmountErrorMsg: "This Field is required"})
    }
    if (Number(this.state.propertyAmount.replace(/[^0-9]/g, '')) < 10000) {
         this.setState({propertyAmountErrorMsg: 'The amount must be greater than $10000', propertyValueOkay: false});
       } else {
         this.setState({propertyAmountErrorMsg: "", propertyValueOkay: true})
       }
  }


  onNext() {
    this.props.onNext(Number(this.state.propertyAmount.replace(/[^0-9]/g, '')));
  }


  render() {

    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          How much do you expect to pay for this property?
        </div>
        <div style={{fontSize: '20px', fontStyle: 'italic', ...this.props.style}}>
          Your best guess is okay
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style }}>
          <TextField id={this.props.id}
                     hintText="Property Amount"
                     errorText={this.state.propertyAmountErrorMsg}
                     floatingLabelText="Property Amount"
                     value={this.state.propertyAmount}
                     onChange={this.onPropertyAmountChange}
                     onBlur={this.blurPropertyAmount} />
        </div>
        <div style={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style }}>
          <CmmRaisedButton
                        label="Next"
                           primary={true}
                        onClick={this.onNext}
                        disabled={!this.state.propertyValueOkay}/>
        </div>
      </div>
    )
  }
}

PropertyAmount.propTypes = {
  id: PropTypes.string.isRequired,
  propertyAmount: PropTypes.number,
  onNext: PropTypes.func
};

export default wrapFormComponent(PropertyAmount);
