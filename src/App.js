import React, { Component } from 'react';


import AnimatedForm from './Components/AnimatedForm/AnimatedForm';
import RateQuoteForm from './Routes/RateQuote/RateQuoteForm';

class App extends Component {

  render() {
    return(
      <AnimatedForm maxFieldsShown={3}>
        <RateQuoteForm/>
      </AnimatedForm>
    );
  }
}

export default App;
