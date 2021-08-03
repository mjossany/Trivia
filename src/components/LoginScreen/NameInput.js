import React, { Component } from 'react';
import { func } from 'prop-types';

class NameInput extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label
        htmlFor="input-player-name"
      >
        Nome
        <input
          type="text"
          id="input-player-name"
          data-testid="input-player-name"
          onChange={ onChange }
          name="name"
        />
      </label>
    );
  }
}

NameInput.propTypes = {
  onChange: func.isRequired,
};

export default NameInput;
