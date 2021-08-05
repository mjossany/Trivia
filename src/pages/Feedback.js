import React, { Component } from 'react';
import PlayerImg from '../components/Header/PlayerImg';
import PlayerName from '../components/Header/PlayerName';

class Feedback extends Component {
  render() {
    const score = 0; // Pegar valor do stado global ou na localStorage não tenho certeza;
    const assertions = 7; // Pegar valor do stado global ou na localStorage não tenho certeza;
    const msgFeedback = ['Podia ser melhor...', 'Mandou bem!'];
    const minValue = 3;
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
        <main>
          <span
            data-testid="feedback-text"
          >
            { assertions < minValue ? msgFeedback[0] : msgFeedback[1] }
          </span>
        </main>
      </div>
    );
  }
}

export default Feedback;
