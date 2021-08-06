import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { string, bool } from 'prop-types';
import PlayerName from './PlayerName';
import Score from './Score';
import PlayerImg from './PlayerImg';
import Timer from './Timer';

class Header extends Component {
  render() {
    const { Email, answered } = this.props;
    const img = md5(Email).toString();
    if (answered) return <Timer />;
    return (
      <div>
        <Timer />
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
  answered: bool.isRequired,
};

const mapStateToProps = ({ player, questions }) => ({
  Email: player.gravatarEmail,
  answered: questions.answered,
});

export default connect(mapStateToProps)(Header);
