import { saveQuestion,saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function addQuestion (authedUser,question) {
  return {
    type: ADD_QUESTION,
    question,
    authedUser
  }
}

function answerQuestion ( authedUser,qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser, qid, answer,
  }
}

export function handleSaveQuestionAnswer ({qid, answer}) {
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

export function handleAddQuestion ({ id,optionOne, optionTwo, text }) {

  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

   saveQuestion({
      id:id,
      optionOne:optionOne,
      optionTwo:optionTwo,
      text:text,
      timestamp:Date.now(),
      author: authedUser,
    })
    .then((question)=>dispatch(addQuestion(authedUser,question)))
    .then(()=>dispatch(hideLoading()))

  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
