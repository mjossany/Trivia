import React, { Component } from 'react';
import PlayerImg from '../components/Header/PlayerImg';
import PlayerName from '../components/Header/PlayerName';

class Feedback extends Component {
  render() {
    const score = 0; // Pegar valor do stado global ou na localStorage não tenho certeza;
    return (
      <div>
        <header>
          <h1>Feedback</h1>
          <PlayerImg />
          <PlayerName />
          <span
            data-testid="header-score"
          >
            {`Placar: ${score}`}
          </span>
        </header>
      </div>
    );
  }
}

export default Feedback;
