import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

class Button extends Component {
  render() {
    const { link, testId, label } = this.props;
    if (link !== '') {
      return (
        <div>
          <Link to={ link }>
            <button
              type="button"
              data-testid={ testId }
            >
              { label }
            </button>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <button
          type="button"
          data-testid={ testId }
        >
          { label }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  link: string,
  testId: string,
  label: string.isRequired,
};

Button.defaultProps = {
  link: '',
  testId: '',
};

export default Button;
