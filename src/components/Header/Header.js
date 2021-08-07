import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import { PlayerImg, PlayerName, Score, Timer } from '.';

class Header extends Component {
  render() {
    const { answered } = this.props;
    if (answered) return <Timer />;
    return (
      <div>
        <Timer />
        <PlayerName />
        <PlayerImg />
        <Score />
      </div>
    );
  }
}

Header.propTypes = {
  answered: bool.isRequired,
};

const mapStateToProps = ({ questions }) => ({
  answered: questions.answered,
});

export default connect(mapStateToProps)(Header);
