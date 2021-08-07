import React, { Component } from 'react';
import { string } from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class PlayerImg extends Component {
  render() {
    const { email } = this.props;
    const img = md5(email).toString();
    return (
      <img
        src={ `https://www.gravatar.com/avatar/${img}` }
        alt="user-img"
        data-testid="header-profile-picture"
      />
    );
  }
}

const mapStateToProps = ({ player }) => ({
  email: player.gravatarEmail,
});

PlayerImg.propTypes = {
  email: string.isRequired,
};

export default connect(mapStateToProps)(PlayerImg);
