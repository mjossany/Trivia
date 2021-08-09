import React, { Component } from 'react';
import { func, bool } from 'prop-types';
import { Link } from 'react-router-dom';

class ButtonPlay extends Component {
  render() {
    const { isDisabled, storeFunc } = this.props;
    return (
      <Link to="/playGame">
        <button
          type="button"
          data-testid="btn-play"
          disabled={ isDisabled }
          onClick={ storeFunc }
        >
          Jogar
        </button>
      </Link>
    );
  }
}

ButtonPlay.propTypes = {
  isDisabled: bool.isRequired,
  storeFunc: func.isRequired,
};

export default ButtonPlay;
