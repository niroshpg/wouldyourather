import React from 'react'
import { connect } from 'react-redux'

import Question from './Question'
import RequestNotFound from './RequestNotFound'

const QuestionPage = ({ question, authedUser }) =>  {

  const answered = question ? question.optionOne.votes
    .concat(question.optionTwo.votes)
    .find(e =>{return e ===authedUser} ) !==undefined
    :
    false;

    return(
      <div>
        {
          (question)?
          <Question id={question.id} summary={false} answered={answered}/>
          :
          <RequestNotFound/>
        }

      </div>
    )
}


function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  return {
    question: questions[id],
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(QuestionPage)
