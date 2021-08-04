import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import NameInput from '../components/LoginScreen/NameInput';
import EmailInput from '../components/LoginScreen/EmailInput';
import ButtonPlay from '../components/LoginScreen/ButtonPlay';
import logo from '../trivia.png';
import '../App.css';
import ButtonSettings from '../components/LoginScreen/ButtonSettings';
import { storagePlayerInfo } from '../actions/index';
import fetchToken from '../fetchs/fetchToken';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateEmailAndName = this.validateEmailAndName.bind(this);
    this.getToken = this.getToken.bind(this);
  }

  async getToken() {
    const { state } = this;
    const { storePlayerInfo } = this.props;
    const token = await fetchToken();
    const tokenStringfy = JSON.stringify(token);
    localStorage.setItem('token', tokenStringfy);
    storePlayerInfo(state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateEmailAndName());
  }

  validateEmailAndName() {
    const { email, name } = this.state;
    const re = /\w+@\w+.com/.test(email);
    const minimumNameLength = 2;
    const validName = name.length >= minimumNameLength;
    const logicValidation = re && validName;
    this.setState({
      disabled: !logicValidation,
    });
  }

  render() {
    const { disabled, email, name } = this.state;
    return (
      <div>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            SUA VEZ
          </p>
          <NameInput
            onChange={ this.handleChange }
            value={ name }
          />
          <EmailInput
            onChange={ this.handleChange }
            value={ email }
          />
          <ButtonPlay
            isDisabled={ disabled }
            storeFunc={ this.getToken }
          />
          <ButtonSettings />
        </header>
      </div>
    );
  }
}

LoginScreen.propTypes = {
  storePlayerInfo: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  storePlayerInfo: (data) => dispatch(storagePlayerInfo(data)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
