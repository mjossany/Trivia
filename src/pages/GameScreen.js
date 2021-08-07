import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, objectOf, bool, number } from 'prop-types';
import Header from '../components/Header/Header';
import fetchQuestions from '../fetchs/fetchQuestions';
import QuestionCategory from '../components/Question/QuestionCategory';
import QuestionText from '../components/Question/QuestionText';
import QuestionAnswers from '../components/Question/QuestionAnswers';
import { Button } from '../components/Feedback';

class GameScreen extends Component {
  componentDidMount() {
    const { dispatchQuestions } = this.props;
    dispatchQuestions();
  }

  render() {
    const { getQuestions, getLoading, getQuestionNumber } = this.props;
    if (getLoading) return <p>Loading...</p>;
    return (
      <div>
        <Header />
        <QuestionCategory
          category={ getQuestions[getQuestionNumber].category }
        />
        <QuestionText
          question={ getQuestions[getQuestionNumber].question }
        />
        <QuestionAnswers
          type={ getQuestions[getQuestionNumber].type }
          correctAnswer={ getQuestions[getQuestionNumber].correct_answer }
          wrongAnswers={ getQuestions[getQuestionNumber].incorrect_answers }
        />
        <Button
          link="/feedback"
        />
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  dispatchQuestions: (questions) => (dispatch(fetchQuestions(questions))),
});

const mapStateToProps = ({ questions }) => ({
  getQuestions: questions.questions,
  getLoading: questions.loading,
  getQuestionNumber: questions.questionNumber,
});

GameScreen.propTypes = {
  dispatchQuestions: func.isRequired,
  getQuestions: arrayOf(objectOf).isRequired,
  getLoading: bool.isRequired,
  getQuestionNumber: number.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(GameScreen);
