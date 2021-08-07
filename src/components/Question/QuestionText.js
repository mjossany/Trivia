import React, { Component } from 'react';
import { string } from 'prop-types';
import htmlDecode from '../../functions/htmlDecode';

class QuestionText extends Component {
  render() {
    const { question } = this.props;
    return (
      <p
        data-testid="question-text"
      >
        { htmlDecode(question) }
      </p>
    );
  }
}

QuestionText.propTypes = {
  question: string.isRequired,
};

export default QuestionText;
