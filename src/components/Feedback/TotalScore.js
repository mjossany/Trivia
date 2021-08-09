import React, { Component } from 'react';
import { number } from 'prop-types';

class TotalScore extends Component {
  render() {
    const { totalScore } = this.props;
    return (
      <div>
        <span>
          Total Score:
        </span>
        <span
          data-testid="feedback-total-score"
        >
          {totalScore}
        </span>
      </div>
    );
  }
}

TotalScore.propTypes = {
  totalScore: number.isRequired,
};

export default TotalScore;
