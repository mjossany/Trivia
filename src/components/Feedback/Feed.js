import React, { Component } from 'react';
import { number } from 'prop-types';

class Feed extends Component {
  render() {
    const { assertions } = this.props;
    const msgFeedback = ['Podia ser melhor...', 'Mandou bem!'];
    const minValue = 3;
    return (
      <div>
        <span
          data-testid="feedback-text"
        >
          { assertions < minValue ? msgFeedback[0] : msgFeedback[1] }
        </span>
      </div>
    );
  }
}

Feed.propTypes = {
  assertions: number.isRequired,
};

export default Feed;
