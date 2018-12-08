import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import {
  Card, Input, Form, Button,Divider, Segment
} from 'semantic-ui-react'
import { v4 } from 'uuid'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }
  handleOptionOneChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionOne: text,
    }))

  }

  handleOptionTwoChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      optionTwo: text,
    }))

  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props
    debugger
    dispatch(
      handleAddQuestion({
        optionOne:optionOne,
        optionTwo:optionTwo,
        text:'',
        id:v4()})
    )

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))

  }
  render() {
    const { optionOne, optionTwo,toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='Question'>

      <Card fluid>
         <Card.Content >
           <Card.Header>Create New Question</Card.Header>
           <Card.Description >
                <h3 className='center'>Complte the question</h3>

                  <Segment padded>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                    <h3>Would you rather ...</h3>

                      <Input fluid
                        placeholder="type you firt option here"
                        value={optionOne}
                        onChange={this.handleOptionOneChange}
                        className='textarea'
                        maxLength={280}
                      />

                      <Divider horizontal>Or</Divider>

                      <Input fluid
                        placeholder="type you second option here"
                        value={optionTwo}
                        onChange={this.handleOptionTwoChange}
                        className='textarea'
                        maxLength={280}
                      />

                      <Button
                        primary type='submit'
                        disabled={optionOne === '' || optionTwo === ''} >
                        Submit
                      </Button>
                        </Form>
                  </Segment>

              </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default connect()(NewQuestion)
