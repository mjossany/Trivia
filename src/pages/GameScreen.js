import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, objectOf, bool, number } from 'prop-types';
import Header from '../components/Header/Header';
import fetchQuestions from '../fetchs/fetchQuestions';
import QuestionCategory from '../components/Question/QuestionCategory';
import QuestionText from '../components/Question/QuestionText';
import QuestionAnswers from '../components/Question/QuestionAnswers';
import { setAnsweredTrue } from '../actions';

class GameScreen extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };

    this.countdown = this.countdown.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    const { dispatchQuestions } = this.props;
    dispatchQuestions();
    this.startTimer();
  }

  componentDidUpdate() {
    const { state } = this;
    const { answered, answeredTrue } = this.props;
    if (answered === true) clearInterval(this.interval);
    if (state.timer === 0) {
      clearInterval(this.interval);
      answeredTrue();
    }
  }

  countdown() {
    const { timer } = this.state;
    this.setState({
      timer: timer - 1,
    });
  }

  startTimer() {
    const { timer } = this.state;
    const start = 30;
    if (timer !== start) {
      this.setState({
        timer: 30,
      });
    }
    const setTimer = 1000;
    this.interval = setInterval(this.countdown, setTimer);
  }

  render() {
    const { getQuestions, getLoading, getQuestionNumber } = this.props;
    const { timer } = this.state;
    if (getLoading) return <p>Loading...</p>;
    return (
      <div>
        <Header timer={ timer } />
        <QuestionCategory
          category={ getQuestions[getQuestionNumber].category }
        />
        <QuestionText
          question={ getQuestions[getQuestionNumber].question }
        />
        <QuestionAnswers
          startTimer={ this.startTimer }
          type={ getQuestions[getQuestionNumber].type }
          correctAnswer={ getQuestions[getQuestionNumber].correct_answer }
          wrongAnswers={ getQuestions[getQuestionNumber].incorrect_answers }
        />
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  dispatchQuestions: (questions) => (dispatch(fetchQuestions(questions))),
  answeredTrue: () => dispatch(setAnsweredTrue()),
});

const mapStateToProps = ({ questions }) => ({
  getQuestions: questions.questions,
  getLoading: questions.loading,
  getQuestionNumber: questions.questionNumber,
  answered: questions.answered,
});

GameScreen.propTypes = {
  dispatchQuestions: func.isRequired,
  getQuestions: arrayOf(objectOf).isRequired,
  getLoading: bool.isRequired,
  getQuestionNumber: number.isRequired,
  answered: bool.isRequired,
  answeredTrue: func.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(GameScreen);
