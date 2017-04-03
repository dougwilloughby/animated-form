/**
 * Created by willo on 2/28/2017.
 */
import React, {Component, PropTypes} from 'react';
import bindAll from 'lodash/bindAll';

import TextField from 'material-ui/TextField';
import CmmRaisedButton from '../../Components/MaterialUI/CmmRaisedButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class CashOutAmount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cashOutAmount: undefined,
      cashOutAmountErrorMsg: '',

      cashOutAmountOkay: false
    };

    bindAll(this, 'onCashOutAmountChange', 'blurCashOutAmount', 'onNext');

  }

  componentDidMount() {
      if (typeof this.props.cashOutAmount !== 'undefined') {
        this.setState({
          cashOutAmount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.cashOutAmount)
        });
      }  else {
            this.setState({cashOutAmount: undefined})
      }
    }

    componentWillReceiveProps(nextProps) {
      if (typeof this.props.cashOutAmount !== 'undefined' && nextProps.cashOutAmount !== this.props.cashOutAmount) {
        this.setState({
          cashOutAmount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.cashOutAmount)
        });
      }
    }


  formatCurrency(input) {
    return (input.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").replace(/^/, '$'));
  }

  onCashOutAmountChange(e) {
    this.setState({cashOutAmount:  this.formatCurrency(e.target.value)});
    if (Number(e.target.value.replace(/[^0-9]/g, '')) >= 10000) {
      this.setState({cashOutAmountErrorMsg: "", cashOutAmountOkay: true})
    }
  }

  blurCashOutAmount() {
    if (typeof this.props.cashOutAmount !== 'undefined') {
      this.setState({cashOutAmountErrorMsg: "This Field is required"})
    }
    if (Number(this.state.cashOutAmount.replace(/[^0-9]/g, '')) < 10000) {
         this.setState({cashOutAmountErrorMsg: 'The amount must be greater than $10000', cashOutAmountOkay: false});
       } else {
         this.setState({cashOutAmountErrorMsg: "", cashOutAmountOkay: true})
       }
  }

  onNext() {
    this.props.onNext(Number(this.state.cashOutAmount.replace(/[^0-9]/g, '')))
  }


  render() {

    return (

      <div style={{...this.props.style}}>
        <div style={{fontSize: '28px'}}>
          How much cash would you like to take out?
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TextField id={this.props.id}
                     hintText="Amount"
                     errorText={this.state.cashOutAmountErrorMsg}
                     floatingLabelText="Amount"
                     value={this.state.cashOutAmount}
                     onChange={this.onCashOutAmountChange}
                     onBlur={this.blurCashOutAmount}
          />
        </div>
        <div style={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style }}>
          <CmmRaisedButton
                        label="Next"
                           primary={true}
                        onClick={this.onNext}
                        disabled={!this.state.cashOutAmountOkay}/>
        </div>
      </div>
    )
  }
}

CashOutAmount.propTypes = {
  id: PropTypes.string.isRequired,
  cashOutAmount: PropTypes.number,
  onNext: PropTypes.func
};


export default wrapFormComponent(CashOutAmount);