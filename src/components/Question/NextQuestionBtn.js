import React, { Component } from 'react';
import { func, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { nextQuestion } from '../../actions';
import saveInfoLocalStorage from '../../functions/saveInfoLocalStorage';

class NextQuestionBtn extends Component {
  componentDidMount() {
    const { name, email, score, assertions } = this.props;
    saveInfoLocalStorage(name, email, score, assertions);
  }

  render() {
    const { changeQuestionNumber, startTimer } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ () => { changeQuestionNumber(); startTimer(); } }
      >
        Próxima
      </button>
    );
  }
}

NextQuestionBtn.propTypes = {
  changeQuestionNumber: func.isRequired,
  startTimer: func.isRequired,
  name: string.isRequired,
  email: string.isRequired,
  score: number.isRequired,
  assertions: number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
  score: state.questions.score,
  assertions: state.questions.assertions,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuestionNumber: () => dispatch(nextQuestion()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestionBtn);
