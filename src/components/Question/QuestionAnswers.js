import React, { Component } from 'react';
import { string, arrayOf, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import randomize from '../../functions/randomize';
import NextQuestionBtn from './NextQuestionBtn';
import { setAnsweredTrue } from '../../actions';

class QuestionAnswers extends Component {
  render() {
    const {
      startTimer,
      correctAnswer,
      wrongAnswers,
      answered,
      answeredTrue,
    } = this.props;
    const allAnswers = [...wrongAnswers
      .map((answer, index) => ({
        correct: false, answer, index, isCorrect: 'wrong-answer',
      })),
    { correct: true, answer: correctAnswer, isCorrect: 'correct-answer' },
    ];
    const randomIndex = randomize(allAnswers.length, allAnswers.length - 1);
    return (
      <div>
        <div>
          {randomIndex.map((number) => {
            const { correct, answer, index: i, isCorrect } = allAnswers[number];
            return (
              <button
                type="button"
                key={ answer }
                data-testid={ correct ? 'correct-answer' : `wrong-answer-${i}` }
                disabled={ answered }
                onClick={ answeredTrue }
                className={ answered ? isCorrect : '' }
              >
                {answer}
              </button>
            );
          })}
        </div>
        <div>
          {
            answered
            && <NextQuestionBtn
              startTimer={ startTimer }
              handleAnswered={ this.handleAnswered }
            />
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  answeredTrue: () => dispatch(setAnsweredTrue()),
});

const mapStateToProps = ({ questions }) => ({
  answered: questions.answered,
});

QuestionAnswers.propTypes = {
  correctAnswer: string.isRequired,
  wrongAnswers: arrayOf(string).isRequired,
  answered: bool.isRequired,
  answeredTrue: func.isRequired,
  startTimer: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionAnswers);
