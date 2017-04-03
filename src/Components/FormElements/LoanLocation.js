/**
 * Created by willo on 2/21/2017.
 */
import React, {Component, PropTypes} from 'react';
import bindAll from 'lodash/bindAll';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CmmRaisedButton from '../../Components/MaterialUI/CmmRaisedButton';


class LoanLocation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      zipCode: '',
      state: '',
      county: '',


      zipCodeErrorMsg: '',
      locationComplete: false,

    };

    bindAll(this, 'onZipCodeChange', 'blurZipCode', 'onStateChange', 'onCountyChange', 'onNext');

  }

  componentDidMount() {
    this.setState({zipCode: this.props.zipCode, state: this.props.state, county: this.props.county});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.zipCode !== this.props.zipCode) this.setState({zipCode: nextProps.zipCode});
    if (nextProps.state !== this.props.state) this.setState({state: nextProps.state});
    if (nextProps.county !== this.props.county) this.setState({county: nextProps.county});
  }

  onZipCodeChange(e) {
    this.setState({zipCode: e.target.value});
    if (this.state.locationComplete &&  e.target.value.length < 5)  {
      this.setState({locationComplete: false});
    } 
  }

  blurZipCode() {
    console.log("blurZipCode called");
    if (this.state.zipCode.length < 5) {
      this.setState({zipCodeErrorMsg: "This field is required", locationComplete: false});
    } else {
      this.setState({zipCodeErrorMsg: "", locationComplete: true})
    }
  }

  onStateChange(event, index, value) {
    this.setState({state: value});
  }

  onCountyChange(event, index, value) {
    this.setState({county: value});
  }

  onNext() {
    this.props.onNext({zipCode: this.state.zipCode, state: this.state.state, county: this.state.county})
  }
  
  render() {

    return (

      <div  style={{textAlign: 'center', paddingTop: '30%'}}>
        <div style={{fontSize: '28px'}}>
          Where are you looking to get a loan?
        </div>
        <div className="row">
          <TextField id={this.props.id}
                     className="col-sm-offset-5 col-sm-2"
                     hintText="Zip Code"
                     errorText={this.state.zipCodeErrorMsg}
                     floatingLabelText="Zip Code"
                     value={this.state.zipCode}
                     onChange={this.onZipCodeChange}
                     onBlur={this.blurZipCode}
          />
        </div>
        <div className="row">
          <SelectField className="col-sm-offset-3 col-sm-3"
                       floatingLabelText="State"
                       style={{textAlign: 'left'}}
                       value={this.state.state}
                       onChange={this.onStateChange}>
            <MenuItem value="AL" primaryText="AL"/>
            <MenuItem value="AK" primaryText="AK"/>
            <MenuItem value="AZ" primaryText="AZ"/>
            <MenuItem value="AR" primaryText="AR"/>
            <MenuItem value="CA" primaryText="CA"/>
            <MenuItem value="CO" primaryText="CO"/>
            <MenuItem value="CT" primaryText="CT"/>
            <MenuItem value="DE" primaryText="DE"/>
            <MenuItem value="DC" primaryText="DC"/>
            <MenuItem value="FL" primaryText="FL"/>
            <MenuItem value="GA" primaryText="GA"/>
            <MenuItem value="HI" primaryText="HI"/>
            <MenuItem value="ID" primaryText="ID"/>
            <MenuItem value="IL" primaryText="IL"/>
            <MenuItem value="IN" primaryText="IN"/>
            <MenuItem value="IA" primaryText="IA"/>
            <MenuItem value="KS" primaryText="KS"/>
            <MenuItem value="KY" primaryText="KY"/>
            <MenuItem value="LA" primaryText="LA"/>
            <MenuItem value="ME" primaryText="ME"/>
            <MenuItem value="MD" primaryText="MD"/>
            <MenuItem value="MA" primaryText="MA"/>
            <MenuItem value="MI" primaryText="MI"/>
            <MenuItem value="MN" primaryText="MN"/>
            <MenuItem value="MS" primaryText="MS"/>
            <MenuItem value="MO" primaryText="MO"/>
            <MenuItem value="MT" primaryText="MT"/>
            <MenuItem value="NE" primaryText="NE"/>
            <MenuItem value="NV" primaryText="NV"/>
            <MenuItem value="NH" primaryText="NH"/>
            <MenuItem value="NJ" primaryText="NJ"/>
            <MenuItem value="NM" primaryText="NM"/>
            <MenuItem value="NY" primaryText="NY"/>
            <MenuItem value="NC" primaryText="NC"/>
            <MenuItem value="ND" primaryText="ND"/>
            <MenuItem value="OH" primaryText="OH"/>
            <MenuItem value="OK" primaryText="OK"/>
            <MenuItem value="OR" primaryText="OR"/>
            <MenuItem value="PA" primaryText="PA"/>
            <MenuItem value="RI" primaryText="RI"/>
            <MenuItem value="SC" primaryText="SC"/>
            <MenuItem value="SD" primaryText="SD"/>
            <MenuItem value="TN" primaryText="TN"/>
            <MenuItem value="TX" primaryText="TX"/>
            <MenuItem value="UT" primaryText="UT"/>
            <MenuItem value="VT" primaryText="VT"/>
            <MenuItem value="VA" primaryText="VA"/>
            <MenuItem value="WA" primaryText="WA"/>
            <MenuItem value="WV" primaryText="WV"/>
            <MenuItem value="WI" primaryText="WI"/>
            <MenuItem value="WY" primaryText="WY"/>
          </SelectField>
          <SelectField className="col-sm-offset-1 col-sm-2"
                       floatingLabelText="County"
                       value={this.state.county}
                       style={{textAlign: 'left'}}
                       onChange={this.onCountyChange}>
            <MenuItem value={1} primaryText="Never"/>
            <MenuItem value={2} primaryText="Every Night"/>
            <MenuItem value={3} primaryText="Weeknights"/>
            <MenuItem value={4} primaryText="Weekends"/>
            <MenuItem value={5} primaryText="Weekly"/>
          </SelectField>
        </div>
        <div className="row" style={{paddingTop: '40px'}}>
          <CmmRaisedButton className="col-sm-offset-5 col-sm-2"
                        label="Next"
                           primary={true}
                        onClick={this.onNext}
                        disabled={!this.state.locationComplete}/>
        </div>
      </div>

    )
  }
}

LoanLocation.propTypes = {
  id: PropTypes.string.isRequired,
  zipCode: PropTypes.string,
  state: PropTypes.string,
  county: PropTypes.string,
  onNext: PropTypes.func.isRequired
};

export default LoanLocation;

