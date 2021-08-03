import React, { Component } from 'react';
import { string } from 'prop-types';

class PlayerImg extends Component {
  render() {
    const { playerImg } = this.props;
    return (
      <img
        src={ `https://www.gravatar.com/avatar/${playerImg}` }
        alt="user-img"
        data-testid="header-profile-picture"
      />
    );
  }
}

PlayerImg.propTypes = {
  playerImg: string.isRequired,
};

export default PlayerImg;
