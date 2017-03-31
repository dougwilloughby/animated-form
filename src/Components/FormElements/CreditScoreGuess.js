/**
 * Created by willo on 2/23/2017.
 */

import React, {Component, PropTypes} from 'react';
import bindAll from 'lodash/bindAll';

import Slider from 'material-ui/Slider';

import wrapFormComponent from '../AnimatedForm/animatedFormComponent';

class CreditScoreGuess extends Component {

  constructor(props) {
    super(props);

    this.state = {
      creditScoreGuess: 720,
    };

    bindAll(this, 'onSliderChange');

  }

  componentDidMount() {
    if (typeof this.props.downPaymentAmount !== 'undefined') {
      this.setState({creditScoreGuess: this.props.creditScoreGuess});
    } else {
      this.setState({creditScoreGuess: 740});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.creditScoreGuess !== this.props.creditScoreGuess) this.setState({creditScoreGuess: nextProps.creditScoreGuess});
  }

  onSliderChange(event, value) {
    this.setState({creditScoreGuess: value});
    this.props.onNext(this.state.creditScoreGuess)
  }


  render() {

    return (

      <div>
        <div style={{fontSize: '28px', ...this.props.style}}>
          What is your approximate credit score?
        </div>
        <div style={{fontSize: '20px', fontStyle: 'italic', ...this.props.style}} >
          Your best guess is okay
        </div>
        <div style={{width: '80%', marginLeft: '10%', paddingTop: '2em', paddingBottom: 0, marginBottom: 0}}>
          <Slider id={this.props.id}
                  sliderStyle={{width: '100%', paddingBottom: 0, marginBottom: 0}}
                  min={500}
                  max={850}
                  step={5}
                  defaultValue={720}
                  value={this.state.creditScoreGuess}
                  onChange={this.onSliderChange}/>

            <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: 0, marginTop: 0}}>
              <p>500</p>
              <p style={{fontSize: '20px', fontStyle: 'bold'}}>My Score: {this.state.creditScoreGuess}</p>
              <p>850</p>
            </div>


        </div>
      </div>
    )
  }
}

CreditScoreGuess.propTypes = {
  id: PropTypes.string.isRequired,
  creditScoreGuess: PropTypes.number,
  onNext: PropTypes.func.isRequired
};
export default wrapFormComponent(CreditScoreGuess);