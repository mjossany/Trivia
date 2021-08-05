import React, { Component } from 'react';
import { string } from 'prop-types';

class QuestionCategory extends Component {
  render() {
    const { category } = this.props;
    return (
      <p
        data-testid="question-category"
      >
        { category }
      </p>
    );
  }
}

QuestionCategory.propTypes = {
  category: string.isRequired,
};

export default QuestionCategory;
