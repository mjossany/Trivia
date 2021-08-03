import React, { Component } from 'react';
import { func } from 'prop-types';

class EmailInput extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label
        htmlFor="input-gravatar-email"
      >
        E-mail
        <input
          type="email"
          id="input-gravatar-email"
          data-testid="input-gravatar-email"
          onChange={ onChange }
          name="email"
        />
      </label>
    );
  }
}

EmailInput.propTypes = {
  onChange: func.isRequired,
};

export default EmailInput;
