import React, { Component } from 'react';

class Squares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftColor: 'red',
      rightColor: 'blue',
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      leftColor: prevState.rightColor,
      rightColor: prevState.leftColor,
    }));
  }

  render() {
    return (
      <div className='centered'>
        <div className={`square ${this.state.leftColor}-square`} onClick={this.handleClick}></div>
        <div className={`square ${this.state.rightColor}-square`} onClick={this.handleClick}></div>
      </div>
    );
  }
}

class Container extends Component {
  render() {
    return <Squares />;
  }
}

class SwitchSquares extends Component {
  render() {
    return (
      <div className='switcher'>
        <div className='switcher-container'>
          <Container />
        </div>
      </div>
    );
  }
}

export default SwitchSquares;
