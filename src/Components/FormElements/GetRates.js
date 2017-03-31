/**
 * Created by willo on 3/3/2017.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import CmmRaisedButton from '../../Components/MaterialUI/CmmRaisedButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';


class GetRates extends Component {


  render() {

    return (
          <CmmRaisedButton className="col-sm-offset-5 col-sm-2"
                        label="Get Rates"
                           primary={true}
                        onClick={this.props.onNext}/>
           )
  };
}

GetRates.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onNext: PropTypes.func
};

function mapStateToProps(state) {

  return {
    userAccount: state.userAccount
  }
}

export default wrapFormComponent(connect(mapStateToProps)(GetRates));