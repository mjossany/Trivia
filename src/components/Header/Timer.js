import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { setAnsweredTrue } from '../../actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };

    this.countdown = this.countdown.bind(this);
  }

  componentDidMount() {
    const setTimer = 1000;
    this.interval = setInterval(this.countdown, setTimer);
  }

  componentDidUpdate() {
    const { state } = this;
    const { answered, answeredTrue } = this.props;
    if (answered === true) clearInterval(this.interval);
    if (state.timer === 0) {
      clearInterval(this.interval);
      answeredTrue();
    }
  }

  countdown() {
    const { timer } = this.state;
    this.setState({
      timer: timer - 1,
    });
  }

  render() {
    const { timer } = this.state;
    const { answered } = this.props;
    if (answered) return <p>...</p>;
    return (
      <p>
        { timer }
      </p>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  answeredTrue: () => dispatch(setAnsweredTrue()),
});

const mapStateToProps = ({ questions }) => ({
  answered: questions.answered,
});

Timer.propTypes = {
  answered: bool.isRequired,
  answeredTrue: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
