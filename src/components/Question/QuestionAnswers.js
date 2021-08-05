import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';
import randomize from '../../functions/randomize';

class QuestionAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    };
    this.handleAnswered = this.handleAnswered.bind(this);
  }

  handleAnswered() {
    this.setState({
      answered: true,
    });
  }

  render() {
    const { correctAnswer, wrongAnswers } = this.props;
    const { answered } = this.state;
    const allAnswers = [...wrongAnswers
      .map((answer, index) => ({
        correct: false, answer, index, isCorrect: 'wrong-answer',
      })),
    { correct: true, answer: correctAnswer, isCorrect: 'correct-answer' },
    ];
    const randomIndex = randomize(allAnswers.length, allAnswers.length - 1);
    return (
      <div>
        {randomIndex.map((number) => {
          const { correct, answer, index: i, isCorrect } = allAnswers[number];
          return (
            <button
              type="button"
              key={ answer }
              data-testid={ correct ? 'correct-answer' : `wrong-answer-${i}` }
              onClick={ this.handleAnswered }
              className={ answered ? isCorrect : '' }
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
