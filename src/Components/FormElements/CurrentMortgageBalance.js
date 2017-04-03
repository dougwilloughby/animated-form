/**
 * Created by willo on 2/28/2017.
 */
import React, {Component, PropTypes} from 'react';
import bindAll from 'lodash/bindAll';

import TextField from 'material-ui/TextField';
import CmmRaisedButton from '../../Components/MaterialUI/CmmRaisedButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class CurrentMortgageBalance extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentMortgageBalance: undefined,
      currentMortgageBalanceErrorMsg: '',

      currentMortgageBalanceOkay: false
    };

    bindAll(this, 'onCurrentMortgageBalanceChange', 'blurCurrentMortgageBalance', 'onNext');

  }

  componentDidMount() {
      if (typeof this.props.currentMortgageBalance !== 'undefined') {
        this.setState({
          currentMortgageBalance: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.currentMortgageBalance)
        });
      } else {
            this.setState({currentMortgageBalance: undefined})
      }
    }

    componentWillReceiveProps(nextProps) {
      if (typeof this.props.currentMortgageBalance !== 'undefined' && nextProps.currentMortgageBalance !== this.props.currentMortgageBalance) {
        this.setState({
          currentMortgageBalance: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.currentMortgageBalance)
        });
      }
    }


  formatCurrency(input) {
    return (input.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").replace(/^/, '$'));
  }

  onCurrentMortgageBalanceChange(e) {
    this.setState({currentMortgageBalance: this.formatCurrency(e.target.value)});
    if (Number(e.target.value.replace(/[^0-9]/g, '')) >= 10000) {
      this.setState({currentMortgageBalanceErrorMsg: "", currentMortgageBalanceOkay: true})
    }
  }

  blurCurrentMortgageBalance() {
    if (typeof this.props.currentMortgageBalance !== 'undefined') {
      this.setState({currentMortgageBalanceErrorMsg: "This Field is required"})
    }
    if (Number(this.state.currentMortgageBalance.replace(/[^0-9]/g, '')) < 10000) {
         this.setState({currentMortgageBalanceErrorMsg: 'The amount must be greater than $10000', currentMortgageBalanceOkay: false});
       } else {
         this.setState({currentMortgageBalanceErrorMsg: "", currentMortgageBalanceOkay: true})
       }
  }

  onNext() {
    this.props.onNext(Number(this.state.currentMortgageBalance.replace(/[^0-9]/g, '')));
  }


  render() {

    return (

      <div style={{...this.props.style}}>
        <div style={{fontSize: '28px'}}>
          What is your current mortgage balance?
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TextField id={this.props.id}
                     hintText="Amount"
                     errorText={this.state.propertyAmountErrorMsg}
                     floatingLabelText="Amount"
                     value={this.state.currentMortgageBalance}
                     onChange={this.onCurrentMortgageBalanceChange}
                     onBlur={this.blurCurrentMortgageBalance}
          />
        </div>
        <div style={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <CmmRaisedButton
                        label="Next"
                           primary={true}
                        onClick={this.onNext}
                        disabled={!this.state.propertyWorthOkay}/>
        </div>
      </div>
    )
  }
}

CurrentMortgageBalance.propTypes = {
  id: PropTypes.string.isRequired,
  currentMortgageBalance: PropTypes.number,
  onNext: PropTypes.func
};

export default wrapFormComponent(CurrentMortgageBalance);