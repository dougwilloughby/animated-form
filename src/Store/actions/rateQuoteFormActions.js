/**
 * Created by willo on 2/28/2017.
 */

import {UPDATE_LOAN_LOCATION, UPDATE_LOAN_TYPE, UPDATE_REFINANCE_PURPOSE} from '../reducers/rateQuoteForm'
import {UPDATE_CASH_OUT_AMOUNT, UPDATE_PROPERTY_TYPE, UPDATE_PROPERTY_USE} from '../reducers/rateQuoteForm'
import {UPDATE_EXPECTED_OWNERSHIP, UPDATE_ARM_OKAY, UPDATE_MILITARY_SERVICE} from '../reducers/rateQuoteForm'
import {UPDATE_PROPERTY_AMOUNT, UPDATE_CURRENT_MORTGAGE_BALANCE, UPDATE_PROPERTY_WORTH} from '../reducers/rateQuoteForm'
import {UPDATE_DOWN_PAYMENT_AMOUNT, UPDATE_CREDIT_SCORE_GUESS} from '../reducers/rateQuoteForm'

export function updateLoanLocation(loanLocation) {
  return {
    type: UPDATE_LOAN_LOCATION,
    loanLocation
  }
}

export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    loanType
  }
}

export function updateRefinancePurpose(refinancePurpose) {
  return {
    type: UPDATE_REFINANCE_PURPOSE,
    refinancePurpose
  }
}

export function updateCashOutAmount(cashOutAmount) {
  return {
    type: UPDATE_CASH_OUT_AMOUNT,
    cashOutAmount
  }
}

export function updatePropertyType(propertyType) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    propertyType
  }
}

export function updatePropertyUse(propertyUse) {
  return {
    type: UPDATE_PROPERTY_USE,
    propertyUse
  }
}

export function updateExpectedOwnership(expectedOwnership) {
  return {
    type: UPDATE_EXPECTED_OWNERSHIP,
    expectedOwnership
  }
}

export function updateArmOkay(armOkay) {
  return {
    type: UPDATE_ARM_OKAY,
    armOkay
  }
}

export function updateMilitaryService(militaryService) {
  return {
    type: UPDATE_MILITARY_SERVICE,
    militaryService
  }
}

export function updatePropertyAmount(propertyAmount) {
  return {
    type: UPDATE_PROPERTY_AMOUNT,
    propertyAmount
  }
}

export function updateCurrentMortgageBalance(currentMortgageBalance) {
  return {
    type: UPDATE_CURRENT_MORTGAGE_BALANCE,
    currentMortgageBalance
  }
}

export function updatePropertyWorth(propertyWorth) {
  return {
    type: UPDATE_PROPERTY_WORTH,
    propertyWorth
  }
}

export function updateDownPaymentAmount(downPaymentAmount) {
  return {
    type: UPDATE_DOWN_PAYMENT_AMOUNT,
    downPaymentAmount
  }
}

export function updateCreditScoreGuess(creditScoreGuess) {
  return {
    type: UPDATE_CREDIT_SCORE_GUESS,
    creditScoreGuess
  }
}