import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import QuestionSummary from './QuestionSummary'
import QuestionPoll from './QuestionPoll'
import QuestionResults from './QuestionResults'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {

  render() {
    const { question,summary,answered} = this.props

    if (question === null) {
      return <p>This Question doesn't existed</p>
    }

    return (
      <div className='Question'>
      {
        summary ?
        <QuestionSummary question={question}/>
        :
        ( answered ?
          <QuestionResults question={question}/>
          :
          <QuestionPoll question={question}/>
        )
      }
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {

  const question = questions[id]
  const formatedQuestion =
    question ? formatQuestion(question, users[question.author], authedUser, null)
    : null

  return {
    authedUser,
    question: formatedQuestion,
  }
}
export default withRouter(connect(mapStateToProps)(Question))
