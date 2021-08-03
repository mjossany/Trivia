import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class PlayerName extends Component {
  render() {
    const { Nome } = this.props;
    return (
      <p
        data-testid="header-player-name"
      >
        { Nome }
      </p>
    );
  }
}

PlayerName.propTypes = {
  Nome: string.isRequired,
};

const mapStateToProps = ({ player }) => ({
  Nome: player.name,
});

export default connect(mapStateToProps)(PlayerName);
