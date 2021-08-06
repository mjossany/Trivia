import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { nextQuestion } from '../../actions';

class NextQuestionBtn extends Component {
  render() {
    const { changeQuestionNumber } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ changeQuestionNumber }
      >
        Próxima
      </button>
    );
  }
}

NextQuestionBtn.propTypes = {
  changeQuestionNumber: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeQuestionNumber: () => dispatch(nextQuestion()),
});

export default connect(null, mapDispatchToProps)(NextQuestionBtn);
