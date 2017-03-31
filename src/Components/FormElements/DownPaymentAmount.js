/**
 * Created by willo on 2/28/2017.
 */
import React, {Component, PropTypes} from 'react';
import bindAll from 'lodash/bindAll';

import TextField from 'material-ui/TextField';
import CmmRaisedButton from '../../Components/MaterialUI/CmmRaisedButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class DownPaymentAmount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      downPaymentAmount: undefined,
      downPaymentAmountErrorMsg: '',

      downPaymentValueOkay: false
    };

    bindAll(this, 'onDownPaymentAmountChange', 'blurDownPaymentAmount', 'onNext');

  }

  componentDidMount() {
      if (typeof this.props.downPaymentAmount !== 'undefined') {
        this.setState({
          downPaymentAmount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.downPaymentAmount)
        });
      } else {
            this.setState({downPaymentAmount: undefined})
      }
    }

    componentWillReceiveProps(nextProps) {
      if (typeof this.props.downPaymentAmount !== 'undefined' && nextProps.downPaymentAmount !== this.props.downPaymentAmount) {
        this.setState({
          downPaymentAmount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.downPaymentAmount)
        });
      }
    }

  formatCurrency(input) {
    return (input.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").replace(/^/, '$'));
  }

  onDownPaymentAmountChange(e) {
    this.setState({downPaymentAmount: this.formatCurrency(e.target.value)});
    if (Number(e.target.value.replace(/[^0-9]/g, '')) >= 10000) {
      this.setState({downPaymentAmountErrorMsg: "", downPaymentValueOkay: true})
    }
  }

  blurDownPaymentAmount() {
    if (typeof this.props.downPaymentAmount !== 'undefined') {
      this.setState({downPaymentAmountErrorMsg: "This Field is required"})
    }
    if (Number(this.state.downPaymentAmount.replace(/[^0-9]/g, '')) < 10000) {
         this.setState({downPaymentAmountErrorMsg: 'The amount must be greater than $10000', downPaymentValueOkay: false});
       } else {
         this.setState({downPaymentAmountErrorMsg: "", downPaymentValueOkay: true})
       }
  }


  onNext() {
    this.props.onNext(Number(this.state.downPaymentAmount.replace(/[^0-9]/g, '')))
  }

  render() {

    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          How much do you expect to put down?
        </div>
        <div style={{fontSize: '20px', fontStyle: 'italic', ...this.props.style}}>
          Your best guess is okay
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style }}>
          <TextField id={this.props.id}
                     hintText="Down Payment Amount"
                     errorText={this.state.downPaymentAmountErrorMsg}
                     floatingLabelText="Down Payment Amount"
                     value={this.state.downPaymentAmount}
                     onChange={this.onDownPaymentAmountChange}
                     onBlur={this.blurDownPaymentAmount}
          />
        </div>
        <div style={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style }}>
          <CmmRaisedButton
                        label="Next"
                           primary={true}
                        onClick={this.onNext}
                        disabled={!this.state.downPaymentValueOkay}/>
        </div>
      </div>
    )
  }
}

DownPaymentAmount.propTypes = {
  id: PropTypes.string.isRequired,
  downPaymentAmount: PropTypes.number,
  onNext: PropTypes.func.isRequired
};


export default wrapFormComponent(DownPaymentAmount);