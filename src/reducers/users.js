import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION,ADD_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  const {authedUser} = action;
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
   case ANSWER_QUESTION :
      const { qid,answer } = action;
      return {
        ...state,
        [authedUser]:{
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]:answer,
          }
        }
      }
  case ADD_QUESTION :
  debugger
       const { question } = action;
       const {id} = question;
       return {
         ...state,
         [authedUser]:{
           ...state[authedUser],
           questions: {
             ...state[authedUser].questions,
             id,
           }
         }
       }
    default :
      return state
  }
}
