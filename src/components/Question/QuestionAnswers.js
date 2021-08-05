import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';
import randomize from '../../functions/randomize';

class QuestionAnswers extends Component {
  render() {
    const { correctAnswer, wrongAnswers } = this.props;
    const allAnswers = [...wrongAnswers
      .map((answer, index) => ({
        correct: false, answer, index, isCorrect: 'wrong-answer',
      })),
    { correct: true, answer: correctAnswer, isCorrect: 'correct-answer' },
    ];
    const randomIndex = randomize(allAnswers.length, allAnswers.length - 1);
    console.log(allAnswers);
    console.log(randomIndex);
    return (
      <div>
        {randomIndex.map((index) => {
          const { correct, answer, index: i } = allAnswers[index];
          return (
            <button
              type="button"
              key={ answer }
              data-testid={ correct ? 'correct-answer' : `wrong-answer-${i}` }

            >
              {answer}
            </button>
          );
        })}
      </div>
    );
  }
}

QuestionAnswers.propTypes = {
  correctAnswer: string.isRequired,
  wrongAnswers: arrayOf(string).isRequired,
};

export default QuestionAnswers;
