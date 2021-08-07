import React, { Component } from 'react';
import { number } from 'prop-types';
import PlayerName from './PlayerName';
import Score from './Score';
import PlayerImg from './PlayerImg';
import Timer from './Timer';

class Header extends Component {
  render() {
    const { timer } = this.props;
    return (
      <div>
        <Timer timer={ timer } />
        <PlayerName />
        <PlayerImg />
        <Score />
      </div>
    );
  }
}

Header.propTypes = {
  timer: number.isRequired,
};

export default Header;
