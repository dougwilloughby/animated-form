/**
 * Created by willo on 2/15/2017.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Actions
import {updateLoanLocation} from '../../Store/actions/rateQuoteFormActions';
import {updateLoanType} from '../../Store/actions/rateQuoteFormActions';
import {updateRefinancePurpose} from '../../Store/actions/rateQuoteFormActions';
import {updateCashOutAmount} from '../../Store/actions/rateQuoteFormActions';
import {updatePropertyType} from '../../Store/actions/rateQuoteFormActions';
import {updatePropertyUse} from '../../Store/actions/rateQuoteFormActions';
import {updateExpectedOwnership} from '../../Store/actions/rateQuoteFormActions';
import {updateArmOkay} from '../../Store/actions/rateQuoteFormActions';
import {updateMilitaryService} from '../../Store/actions/rateQuoteFormActions';
import {updatePropertyAmount} from '../../Store/actions/rateQuoteFormActions';
import {updateCurrentMortgageBalance} from '../../Store/actions/rateQuoteFormActions';
import {updatePropertyWorth} from '../../Store/actions/rateQuoteFormActions';
import {updateDownPaymentAmount} from '../../Store/actions/rateQuoteFormActions';
import {updateCreditScoreGuess} from '../../Store/actions/rateQuoteFormActions';

import AnimatedForm from '../../Components/AnimatedForm/AnimatedForm';

import LoanLocation from '../../Components/FormElements/LoanLocation';
import LoanType from '../../Components/FormElements/LoanType';
import RefinancePurpose from '../../Components/FormElements/RefinancePurpose';
import CashOutAmount from '../../Components/FormElements/CashOutAmount';
import PropertyType from '../../Components/FormElements/PropertyType';
import PropertyUse from '../../Components/FormElements/PropertyUse';
import ExpectedOwnership from '../../Components/FormElements/ExpectedOwnership';
import ArmOkay from '../../Components/FormElements/ArmOkay';
import MilitaryService from '../../Components/FormElements/MilitaryService';
import PropertyAmount from '../../Components/FormElements/PropertyAmount';
import PropertyWorth from '../../Components/FormElements/PropertyWorth';
import CurrentMortgageBalance from '../../Components/FormElements/CurrentMortgageBalance';
import DownPaymentAmount from '../../Components/FormElements/DownPaymentAmount';
import CreditScoreGuess from '../../Components/FormElements/CreditScoreGuess';
import GetRates from '../../Components/FormElements/GetRates';


import './RateQuote.css';

class RateQuoteForm extends Component {

  generalQuestionsAnswered() {
    let answers = 0;
    if (this.props.rateQuoteForm.loanLocationValid) answers++;
    if (this.props.rateQuoteForm.propertyType !== '') answers++;
    if (this.props.rateQuoteForm.propertyUse !== '') answers++;
    if (this.props.rateQuoteForm.expectedOwnership !== '') answers++;
    if (this.props.rateQuoteForm.armOkay !== '') answers++;
    if (this.props.rateQuoteForm.militaryService !== '') answers++;
    if (typeof this.props.rateQuoteForm.creditScoreGuess !== 'undefined') answers++;
    return(answers);
  }

  refiQuestionsAnswered() {
    if (this.props.rateQuoteForm.loanType !== 'refinance') {
      return 0;
    } else {
      let answers = 1;
      if (typeof this.props.rateQuoteForm.propertyWorth !== 'undefined') answers++;
      if (typeof this.props.rateQuoteForm.currentMortgageBalance !== 'undefined') answers++;
      if (this.props.rateQuoteForm.refinancePurpose !== '') answers++;
      if (this.props.rateQuoteForm.refinancePurpose === 'cashOut') {
        answers++;
        if (typeof this.props.rateQuoteForm.cashOutAmount !== 'undefined') answers++;
      } else if (this.props.rateQuoteForm.refinancePurpose === 'lowerPayment')  {
        answers++;
      }
      return (answers);
    }
  }

  purchaseQuestionsAnswered() {
    if (this.props.rateQuoteForm.loanType !== 'purchase') {
      return 0;
    } else {
      let answers = 1;
      if (typeof this.props.rateQuoteForm.propertyAmount !== 'undefined') answers++;
      if (typeof this.props.rateQuoteForm.downPaymentAmount !== 'undefined') answers++;
      return (answers);
    }
  }

  // Number of questions that need to be answered is being maintained for the user.
  // It's brute force (and I hate that) but straightforward. Okay, I'm done justifying this code...
  calcNumberOfSteps() {
    if (this.props.rateQuoteForm.loanType === 'refinance') {
      if (this.props.rateQuoteForm.refinancePurpose === 'cashOut') {
        return 12;
      } else {
        return 11;
      }
    } else if (this.props.rateQuoteForm.loanType === 'purchase') {
      return 10;
    } else {
      return 8;
    }
  }

  onLoanLocationComplete(e) {
    this.props.dispatch(updateLoanLocation({loanLocation: e}));
  }


  onLoanTypeComplete(e) {
    this.props.dispatch(updateLoanType({loanType: e}));
    if (e === 'purchase') {
          document.getElementById('propertyType').focus();
        } else {
          document.getElementById('refinancePurpose').focus();
        }
  }

  onRefinancePurposeSelected(e) {
    this.props.dispatch(updateRefinancePurpose({refinancePurpose: e}));
    if (e === 'cashOut') {
      document.getElementById('cashOutAmount').focus();
    } else {
      document.getElementById('propertyType').focus();
    }
  }

  onCashOutAmountComplete(e) {
    this.props.dispatch(updateCashOutAmount({cashOutAmount: e}));
    document.getElementById('propertyType').focus();
  }

  onPropertyTypeComplete(e) {
    this.props.dispatch(updatePropertyType({propertyType: e}));
    document.getElementById('propertyUse').focus();

  }

  onPropertyUseComplete(e) {
    this.props.dispatch(updatePropertyUse({propertyUse: e}));
    document.getElementById('expectedOwnership').focus();
  }

  onExpectedOwnershipComplete(e) {
    this.props.dispatch(updateExpectedOwnership({expectedOwnership: e}));
    document.getElementById('armOkay').focus();
  }

  onArmOkayComplete(e) {
    this.props.dispatch(updateArmOkay({armOkay: e}));
    document.getElementById('militaryService').focus();
  }

  onMilitaryServiceComplete(e) {
    this.props.dispatch(updateMilitaryService({militaryService: e}));
    if (this.props.rateQuoteForm.loanType === 'refinance') {
      document.getElementById('propertyWorth').focus();
    } else if (this.props.rateQuoteForm.loanType === 'purchase') {
      document.getElementById('propertyAmount').focus();
    } else {
      document.getElementById('creditScoreGuess').focus();
    }
  }

  onPropertyAmountComplete(e) {
    this.props.dispatch(updatePropertyAmount({propertyAmount: e}));
    document.getElementById('downPaymentAmount').focus();
  }

  onCurrentMortgageBalanceCompleted(e) {
    this.props.dispatch(updateCurrentMortgageBalance({currentMortgageBalance: e}));
    document.getElementById('creditScoreGuess').focus();
  }

  onPropertyWorthCompleted(e) {
    this.props.dispatch(updatePropertyWorth({propertyWorth: e}));
    document.getElementById('currentMortgageBalance').focus();
  }

  onDownPaymentAmountComplete(e) {
    this.props.dispatch(updateDownPaymentAmount({downPaymentAmount: e}));
    document.getElementById('creditScoreGuess').focus();
  }

  onCreditScoreGuessComplete(e) {
    this.props.dispatch(updateCreditScoreGuess({creditScoreGuess: e}));
    document.getElementById('getRates').focus();
  }


  render() {

    let loanLocationEntered = this.props.rateQuoteForm.loanLocationValid;

    return (
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'stretch', width: '100%'}}>
        <AnimatedForm maxFieldsShown={3} id='rateQuoteForm' style={{flexGrow: 1, minWidth: '80%'}}>
            <LoanLocation id='loanLocation'
                          zipCode={this.props.rateQuoteForm.loanLocation.zipCode}
                          state={this.props.rateQuoteForm.loanLocation.state}
                          county={this.props.rateQuoteForm.loanLocation.county}
                          onNext={this.onLoanLocationComplete.bind(this)}/>

            <LoanType id="loanType"
                      loanType={this.props.rateQuoteForm.loanType}
                      hide={!loanLocationEntered}
                      onNext={this.onLoanTypeComplete.bind(this)}/>

            <RefinancePurpose id="refinancePurpose"
                              refinancePurpose={this.props.rateQuoteForm.refinancePurpose}
                              hide={!(loanLocationEntered && this.props.rateQuoteForm.loanType === 'refinance')}
                              onNext={this.onRefinancePurposeSelected.bind(this)}/>
            <CashOutAmount id="cashOutAmount"
                           cashOutAmount={this.props.rateQuoteForm.cashOutAmount}
                           hide={!(loanLocationEntered && this.props.rateQuoteForm.loanType === 'refinance' && this.props.rateQuoteForm.refinancePurpose === "cashOut")}
                           onNext={this.onCashOutAmountComplete.bind(this)}/>
            <PropertyType id="propertyType"
                          propertyAmount={this.props.rateQuoteForm.propertyType}
                          hide={!loanLocationEntered}
                          onNext={this.onPropertyTypeComplete.bind(this)}/>
            <PropertyUse id="propertyUse"
                         propertyUse={this.props.rateQuoteForm.propertyUse}
                         hide={!loanLocationEntered}
                         onNext={this.onPropertyUseComplete.bind(this)}/>

            <ExpectedOwnership id="expectedOwnership"
                               expectedOwnership={this.props.rateQuoteForm.expectedOwnership}
                               hide={!loanLocationEntered}
                               onNext={this.onExpectedOwnershipComplete.bind(this)}/>

            <ArmOkay id="armOkay"
                     armOkay={this.props.rateQuoteForm.armOkay}
                     hide={!loanLocationEntered}
                     onNext={this.onArmOkayComplete.bind(this)}/>

            <MilitaryService id="militaryService"
                             militaryService={this.props.rateQuoteForm.militaryService}
                             hide={!loanLocationEntered}
                             onNext={this.onMilitaryServiceComplete.bind(this)}/>

            <PropertyWorth id="propertyWorth"
                           propertyWorth={this.props.rateQuoteForm.propertyWorth}
                           hide={!(loanLocationEntered && this.props.rateQuoteForm.loanType === 'refinance')}
                           onNext={this.onPropertyWorthCompleted.bind(this)}/>

            <CurrentMortgageBalance id="currentMortgageBalance"
                                    currentMortgageBalance={this.props.rateQuoteForm.currentMortgageBalance}
                                    hide={!(loanLocationEntered && this.props.rateQuoteForm.loanType === 'refinance')}
                                    onNext={this.onCurrentMortgageBalanceCompleted.bind(this)}/>

            <PropertyAmount id="propertyAmount"
                            propertyAmount={this.props.rateQuoteForm.propertyAmount}
                            hide={!(loanLocationEntered && this.props.rateQuoteForm.loanType === 'purchase')}
                            onNext={this.onPropertyAmountComplete.bind(this)}/>

            <DownPaymentAmount id="downPaymentAmount"
                               downPaymentAmount={this.props.rateQuoteForm.downPaymentAmount}
                               hide={!(loanLocationEntered && this.props.rateQuoteForm.loanType === 'purchase')}
                               onNext={this.onDownPaymentAmountComplete.bind(this)}/>

            <CreditScoreGuess id="creditScoreGuess"
                              creditScoreGuess={this.props.creditScoreGuess}
                              hide={!loanLocationEntered}
                              onNext={this.onCreditScoreGuessComplete.bind(this)}/>

            <GetRates id='getRates' hide={!loanLocationEntered}/>


        </AnimatedForm>
          <div style={{flex: 1}}>
            Help goes here
          </div>
      </div>
    );
  }
}

RateQuoteForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {

  return {
    userAccount: state.userAccount,
    rateQuoteForm: state.rateQuoteForm
  };
}

export default connect(mapStateToProps)(RateQuoteForm);

