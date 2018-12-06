import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions'

export default function Questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.Questions
      }
    case ANSWER_QUESTION :
    const {qid,answer,authedUser} = action;
    
      return {
        ...state,
        [qid]:{
          ...state[qid],
          [answer]:{
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          }

        }
      }
    // case TOGGLE_Question :
    //   return {
    //     ...state,
    //     [action.id]: {
    //       ...state[action.id],
    //       likes: action.hasLiked === true
    //         ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
    //         : state[action.id].likes.concat([action.authedUser])
    //     }
    //   }
    // case ADD_Question :
    //   const { Question } = action
    //
    //   let replyingTo = {}
    //   if (Question.replyingTo !== null) {
    //     replyingTo = {
    //       [Question.replyingTo]: {
    //         ...state[Question.replyingTo],
    //         replies: state[Question.replyingTo].replies.concat([Question.id])
    //       }
    //     }
    //   }
      //
      // return {
      //   ...state,
      //   [action.Question.id]: action.Question,
      //   ...replyingTo,
      // }
    default :
      return state
  }
}
