import React, { Component } from 'react';
import PlayerImg from '../components/Header/PlayerImg';
import PlayerName from '../components/Header/PlayerName';

class Feedback extends Component {
  render() {
    const score = 0; // Pegar valor do stado global ou na localStorage não tenho certeza;
    const assertions = 4; // Pegar valor do stado global ou na localStorage não tenho certeza;
    const msgFeedback = ['Podia ser melhor...', 'Mandou bem!'];
    const minValue = 3;
    const totalScore = 0;
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
          <div>
            <span
              data-testid="feedback-text"
            >
              { assertions < minValue ? msgFeedback[0] : msgFeedback[1] }
            </span>
          </div>
          <div>
            <span
              data-testid="feedback-total-score"
            >
              {`Total Score: ${totalScore}`}
            </span>
          </div>
          <div>
            <span
              data-testid="feedback-total-question"
            >
              {`Acertos: ${assertions}/5`}
            </span>
          </div>
        </main>
      </div>
    );
  }
}

export default Feedback;
