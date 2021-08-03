import React, { Component } from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import fetchToken from '../../fetchs/fetchToken';

class ButtonPlay extends Component {
  getToken() {
    const token = fetchToken();
    console.log(token);
  }

  render() {
    const { isDisabled } = this.props;
    return (
      <Link to="/playGame">
        <button
          type="button"
          data-testid="btn-play"
          disabled={ isDisabled }
          onClick={ this.getToken }
        >
          Jogar
        </button>
      </Link>
    );
  }
}

ButtonPlay.propTypes = {
  isDisabled: bool.isRequired,
};

export default ButtonPlay;
