import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { string, number } from 'prop-types';
import PlayerName from './PlayerName';
import Score from './Score';
import PlayerImg from './PlayerImg';
import Timer from './Timer';

class Header extends Component {
  render() {
    const { Email, timer } = this.props;
    const img = md5(Email).toString();
    return (
      <div>
        <Timer timer={ timer } />
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
  timer: number.isRequired,
};

const mapStateToProps = ({ player }) => ({
  Email: player.gravatarEmail,
});

export default connect(mapStateToProps)(Header);
