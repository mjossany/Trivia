import React, { Component } from 'react';
import { arrayOf, objectOf } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { Button, Feed, Hits, TotalScore } from '../components/Feedback';

class Feedback extends Component {
  render() {
    const { getQuestions } = this.props;
    const assertions = 4; // Pegar valor do stado global ou na localStorage não tenho certeza;
    const totalScore = 0; // Pegar valor do stado global ou na localStorage não tenho certeza;
    const qntQuestions = getQuestions.length;
    return (
      <div>
        <header>
          <h1>Feedback</h1>
          <Header />
        </header>
        <main>
          <Feed
            assertions={ assertions }
          />
          <TotalScore
            totalScore={ totalScore }
          />
          <Hits
            assertions={ assertions }
            qntQuestions={ qntQuestions }
          />
          <Button
            link="/"
            testId="btn-play-again"
            label="Jogar novamente"
          />
          <Button
            link="/ranking"
            testId="btn-ranking"
            label="Ver Ranking"
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  getQuestions: questions.questions,
});

Feedback.propTypes = {
  getQuestions: arrayOf(objectOf).isRequired,
};

export default connect(mapStateToProps)(Feedback);
