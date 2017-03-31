/**
 * Created by willo on 2/21/2017.
 */

export const UPDATE_LOAN_LOCATION = 'UPDATE_LOAN_LOCATION';
export const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
export const UPDATE_REFINANCE_PURPOSE = 'UPDATE_REFINANCE_PURPOSE';
export const UPDATE_CASH_OUT_AMOUNT = 'UPDATE_CASH_OUT_AMOUNT';
export const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
export const UPDATE_PROPERTY_USE = 'UPDATE_PROPERTY_USE';
export const UPDATE_EXPECTED_OWNERSHIP = 'UPDATE_EXPECTED_OWNERSHIP';
export const UPDATE_ARM_OKAY = 'UPDATE_ARM_OKAY';
export const UPDATE_MILITARY_SERVICE = 'UPDATE_MILITARY_SERVICE';
export const UPDATE_PROPERTY_AMOUNT = 'UPDATE_PROPERTY_AMOUNT';
export const UPDATE_CURRENT_MORTGAGE_BALANCE = 'UPDATE_CURRENT_MORTGAGE_BALANCE';
export const UPDATE_PROPERTY_WORTH = 'UPDATE_PROPERTY_WORTH';
export const UPDATE_DOWN_PAYMENT_AMOUNT = 'UPDATE_DOWN_PAYMENT_AMOUNT';
export const UPDATE_CREDIT_SCORE_GUESS = 'UPDATE_CREDIT_SCORE_GUESS';

// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = {
  loanLocation: {
    zipCode: '',
    state: '',
    county: ''
  },
  loanLocationValid: false,  // loan location is some valid locality
  loanType: '',          // 'purchase' or 'refinance'
  refinancePurpose: '',  // 'cashOut' or 'lowerPayments'
  cashOutAmount: undefined,     // Number
  propertyType: '',      // 'singleFamily', 'condo', or 'multiUnit'
  propertyUse: '',       // 'primary', 'second' or 'investment'
  expectedOwnership: '', // 'fiveTo7', 'lessThan15', 'moreThan15' or 'NotSure'
  armOkay: '',           // 'yes', 'no', 'notSure'
  militaryService: '',   // 'yes', 'no'
  propertyAmount: undefined,     // Number
  currentMortgageBalance: undefined,   // Number
  downPaymentAmount: undefined,    // Number
  creditScoreGuess:  undefined     // Number
};

export default function rateQuoteForm(state=INITIAL_STATE, action) {

  switch(action.type) {

    case UPDATE_LOAN_LOCATION:
      return {...state, ...action.loanLocation, loanLocationValid: true};

    case UPDATE_LOAN_TYPE:
      return {...state, ...action.loanType};

    case UPDATE_REFINANCE_PURPOSE:
          return {...state, ...action.refinancePurpose};

    case UPDATE_CASH_OUT_AMOUNT:
        return {...state, ...action.cashOutAmount};

    case UPDATE_PROPERTY_TYPE:
          return {...state, ...action.propertyType};

    case UPDATE_PROPERTY_USE:
          return {...state, ...action.propertyUse};

    case UPDATE_EXPECTED_OWNERSHIP:
          return {...state, ...action.expectedOwnership};

    case UPDATE_ARM_OKAY:
          return {...state, ...action.armOkay};

    case UPDATE_MILITARY_SERVICE:
          return {...state, ...action.militaryService};

    case UPDATE_PROPERTY_AMOUNT:
          return {...state, ...action.propertyAmount};

    case UPDATE_CURRENT_MORTGAGE_BALANCE:
          return {...state, ...action.currentMortgageBalance};

    case UPDATE_PROPERTY_WORTH:
          return {...state, ...action.propertyWorth};

    case UPDATE_DOWN_PAYMENT_AMOUNT:
          return {...state, ...action.downPaymentAmount};

    case UPDATE_CREDIT_SCORE_GUESS:
          return {...state, ...action.creditScoreGuess};

    default:
      return state;
  }
}
