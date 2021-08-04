import React, { Component } from 'react';
import Header from '../components/Header/Header';
import fetchQuestions from '../fetchs/fetchQuestions';

class GameScreen extends Component {
  componentDidMount() {
    fetchQuestions();
  }

  render() {
    return (
      <Header />
    );
  }
}

export default GameScreen;
