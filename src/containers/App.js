import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class App extends Component {
  render() {
    return (
      <div>
        <p>Content типо</p>
        <Button variant='contained' color='primary'>
          Кликни по мне плз
        </Button>
      </div>
    );
  }
}

export default App;
