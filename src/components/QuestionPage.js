import React, { Component } from 'react'
import { connect } from 'react-redux'

import Question from './Question'

class QuestionPage extends Component {
  render() {
    const { question, authedUser } = this.props;

    const answered = question.optionOne.votes
      .concat(question.optionTwo.votes)
      .find(e =>{return e ===authedUser} ) !==undefined;

    return (
      <div>
        <Question id={question.id} summary={false} answered={answered}/>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  return {
    question: questions[id],
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(QuestionPage)
