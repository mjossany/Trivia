import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import PlayerName from './PlayerName';
import Score from './Score';
import PlayerImg from './PlayerImg';

class Header extends Component {
  render() {
    const { Email } = this.props;
    const img = md5(Email).toString();
    return (
      <div>
        <PlayerName />
        <PlayerImg
          playerImg={ img }
        />
        <Score />
      </div>
    );
  }
}

Header.propTypes = {
  Email: string.isRequired,
};

const mapStateToProps = ({ player }) => ({
  Email: player.gravatarEmail,
});

export default connect(mapStateToProps)(Header);
