import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';

class Score extends Component {
  render() {
    const { score } = this.props;
    return (
      <p
        data-testid="header-score"
      >
        {score}
      </p>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.questions.score,
});

Score.propTypes = {
  score: number.isRequired,
};

export default connect(mapStateToProps)(Score);
