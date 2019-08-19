import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Main from './Main/MainPart';

class App extends Component {
  state = {
    toDoDatas: [],
  }

  updateToDoDatas = (args) => {
    this.setState({ toDoDatas: args }, () => { console.log(this.state.toDoDatas) })
  }

  render() {
    return (
      <>
        <Header />
        <Main toDoDatas={this.state.toDoDatas} refreshData={this.updateToDoDatas} />
      </>
    );
  }
}

export default App;
