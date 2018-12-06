import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    text: '',
    toHome: false,
  }
  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { dispatch, id } = this.props

    dispatch(handleAddQuestion(text, id))

    this.setState(() => ({
      text: '',
      toHome: id ? false : true,
    }))
  }
  render() {
    const { text, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    const questionsLeft = 280 - text.length

    return (
      <div>
        <h3 className='center'>Compose new question</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {questionsLeft <= 100 && (
            <div className='question-length'>
              {questionsLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
