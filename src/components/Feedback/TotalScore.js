import React, { Component } from 'react';
import { number } from 'prop-types';

class TotalScore extends Component {
  render() {
    const { totalScore } = this.props;
    return (
      <div>
        <span
          data-testid="feedback-total-score"
        >
          {`Total Score: ${totalScore}`}
        </span>
      </div>
    );
  }
}

TotalScore.propTypes = {
  totalScore: number.isRequired,
};

export default TotalScore;
