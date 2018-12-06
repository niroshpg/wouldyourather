import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
// import { handleToggleQuestion } from '../actions/questions'
import { Link, withRouter } from 'react-router-dom'
import { Card, Icon,Grid, Image , Button} from 'semantic-ui-react'
import Avatar from 'react-avatar'
import QuestionSummary from './QuestionSummary'
import QuestionPoll from './QuestionPoll'
import QuestionResults from './QuestionResults'

class Question extends Component {

  handleLike = (e) => {
    e.preventDefault()

    const { dispatch, Question, authedUser } = this.props

    // dispatch(handleToggleQuestion({
    //   id: Question.id,
    //   hasLiked: Question.hasLiked,
    //   authedUser
    // }))
  }
  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }
  render() {
    const { Question,summary,answered} = this.props

    if (Question === null) {
      return <p>This Question doesn't existed</p>
    }
    const {
      name, author,avatar,optionOne, timestamp, text, id, parent
    } = Question

    return (
      <div className='Question'>
      {
        summary ?
        <QuestionSummary question={Question}/>
        :
        ( answered ?
          <QuestionResults question={Question}/>
          :
          <QuestionPoll question={Question}/>
        )
      }

      </div>
    )
  }
}
function mapStateToProps ({authedUser, users, Questions}, { id }) {
  const Question = Questions[id]
  const parentQuestion = Question ? Questions[Question.replyingTo] : null
  return {
    authedUser,
    Question: Question
      ? formatQuestion(Question, users[Question.author], authedUser, parentQuestion)
      : null
  }
}
export default withRouter(connect(mapStateToProps)(Question))
