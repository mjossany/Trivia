import React, { Component } from 'react';
import { bool } from 'prop-types';

class ButtonPlay extends Component {
  render() {
    const { isDisabled } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-play"
        disabled={ isDisabled }
      >
        Jogar
      </button>
    );
  }
}

ButtonPlay.propTypes = {
  isDisabled: bool.isRequired,
};

export default ButtonPlay;
