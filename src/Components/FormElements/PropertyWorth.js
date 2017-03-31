/**
 * Created by willo on 2/28/2017.
 */
import React, {Component, PropTypes} from 'react';
import bindAll from 'lodash/bindAll';

import TextField from 'material-ui/TextField';
import CmmRaisedButton from '../../Components/MaterialUI/CmmRaisedButton';
import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class PropertyWorth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      propertyWorth: undefined,
      propertyWorthErrorMsg: '',

      propertyWorthOkay: false
    };

    bindAll(this, 'onPropertyWorthChange', 'blurPropertyWorth', 'onNext');

  }


  componentDidMount() {
      if (typeof this.props.propertyWorth !== 'undefined') {
        this.setState({
          propertyWorth: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.propertyWorth)
        });
      }  else {
            this.setState({propertyWorth: undefined})
      }
    }

    componentWillReceiveProps(nextProps) {
      if (typeof this.props.propertyWorth !== 'undefined' && nextProps.propertyWorth !== this.props.propertyWorth) {
        this.setState({
          propertyWorth: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
          }).format(this.props.propertyWorth)
        });
      }
    }

  formatCurrency(input) {
        return (input.replace(/[^0-9]/g, '').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,").replace(/^/, '$'));
      }

  onPropertyWorthChange(e) {
    this.setState({propertyWorth: this.formatCurrency(e.target.value)});
    if (Number(e.target.value.replace(/[^0-9]/g, '')) >= 10000) {
      this.setState({propertyWorthErrorMsg: "", propertyWorthOkay: true})
    }
  }

  blurPropertyWorth() {
    if (typeof this.props.propertyWorth !== 'undefined') {
      this.setState({propertyWorthErrorMsg: "This Field is required"})
    }
    if (Number(this.state.propertyWorth.replace(/[^0-9]/g, '')) < 10000) {
         this.setState({propertyWorthErrorMsg: 'The amount must be greater than $10000', propertyWorthOkay: false});
       } else {
         this.setState({propertyWorthErrorMsg: "", propertyWorthOkay: true})
       }
  }

  onNext() {
    this.props.onNext(Number(this.state.propertyWorth.replace(/[^0-9]/g, '')));
  }


  render() {

    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          What is your property worth?
        </div>
        <div style={{fontSize: '20px', fontStyle: 'italic', ...this.props.style}}>
          Your best guess is okay
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style }}>
          <TextField id={this.props.id}
                     hintText="Property Worth"
                     errorText={this.state.propertyAmountErrorMsg}
                     floatingLabelText="Property Worth"
                     value={this.state.propertyWorth}
                     onChange={this.onPropertyWorthChange}
                     onBlur={this.blurPropertyWorth}
          />
        </div>
        <div style={{paddingTop: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...this.props.style }}>
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

PropertyWorth.propTypes = {
  id: PropTypes.string.isRequired,
  propertyWorth: PropTypes.number,
  onNext: PropTypes.func
};


export default wrapFormComponent(PropertyWorth);