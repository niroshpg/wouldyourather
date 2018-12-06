import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import NewQuestion from './NewQuestion'

class QuestionPage extends Component {
  render() {
    const { question, authedUser } = this.props;

    const answered = question.optionOne.votes.concat(question.optionTwo.votes).find(
        e =>{return e ===authedUser} ) !==undefined


    return (
      <div>
        <Question id={question.id} summary={false} answered={answered}/>
      </div>
    )
  }
}

// <NewQuestion id={id} />
// {replies.length !== 0 && <h3 className='center'>Replies</h3>}
// <ul>
//   {replies.map((replyId) => (
//     <li key={replyId}>
//       <Question id={replyId}/>
//     </li>
//   ))}
// </ul>

function mapStateToProps ({ authedUser, Questions, users }, props) {
  const { id } = props.match.params

  return {
    question: Questions[id],
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(QuestionPage)
