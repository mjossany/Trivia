import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, objectOf, bool } from 'prop-types';
import Header from '../components/Header/Header';
import fetchQuestions from '../fetchs/fetchQuestions';
import QuestionCategory from '../components/Question/QuestionCategory';
import QuestionText from '../components/Question/QuestionText';
import QuestionAnswers from '../components/Question/QuestionAnswers';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
    };
  }

  componentDidMount() {
    const { dispatchQuestions } = this.props;
    dispatchQuestions();
  }

  render() {
    const { questionNumber } = this.state;
    const { getQuestions, getLoading } = this.props;
    if (getLoading) return <p>Loading...</p>;
    return (
      <div>
        <Header />
        <QuestionCategory
          category={ getQuestions[questionNumber].category }
        />
        <QuestionText
          question={ getQuestions[questionNumber].question }
        />
        <QuestionAnswers
          type={ getQuestions[questionNumber].type }
          correctAnswer={ getQuestions[questionNumber].correct_answer }
          wrongAnswers={ getQuestions[questionNumber].incorrect_answers }
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
});

GameScreen.propTypes = {
  dispatchQuestions: func.isRequired,
  getQuestions: arrayOf(objectOf).isRequired,
  getLoading: bool.isRequired,
};

export default connect(mapStateToProps, mapDispathToProps)(GameScreen);
