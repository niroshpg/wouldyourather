import { saveQuestion,saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function answerQuestion ( authedUser,qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser, qid, answer,
  }
}


export function handleSaveQuestionAnswer ({qid, answer}) {
  debugger
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading());

     saveQuestionAnswer({
      authedUser: authedUser,
      qid: qid,
      answer: answer
    });
      dispatch(answerQuestion( authedUser, qid, answer));
      dispatch(hideLoading());
  }
}

export function handleAddQuestion (text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      text,
      author: authedUser,
      replyingTo
    })
      .then((Question) => dispatch(addQuestion(Question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (Questions) {
  return {
    type: RECEIVE_QUESTIONS,
    Questions,
  }
}
