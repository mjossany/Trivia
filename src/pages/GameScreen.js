import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import fetchQuestions from '../fetchs/fetchQuestions';
import QuestionCategory from '../components/Question/QuestionCategory';
import QuestionText from '../components/Question/QuestionText';

class GameScreen extends Component {
  componentDidMount() {
    const { getQuestions } = this.props;
    getQuestions();
  }

  render() {
    const { getCategory, getQuestion } = this.props;
    console.log(getCategory);
    return (
      <div>
        <Header />
        <QuestionCategory
          category={ getCategory[0] }
        />
        <QuestionText
          question={ getQuestion[0] }
        />
      </div>
    );
  }
}

GameScreen.propTypes = {
  getQuestions: func.isRequired,
  getCategory: string.isRequired,
  getQuestion: string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (data) => dispatch(fetchQuestions(data)),
});

const mapStateToProps = (state) => ({
  getCategory: state.questions.results,
  getQuestion: state.questions.results,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
