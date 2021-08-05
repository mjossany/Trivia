import React, { Component } from 'react';
import { string } from 'prop-types';

class QuestionText extends Component {
  render() {
    const { question } = this.props;
    return (
      <p
        data-testid="question-text"
      >
        { question }
      </p>
    );
  }
}

QuestionText.propTypes = {
  question: string.isRequired,
};

export default QuestionText;
