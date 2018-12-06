import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

//const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, Questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(Questions))
        // dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}
