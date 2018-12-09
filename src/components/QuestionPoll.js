import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import Avatar from 'react-avatar'
import {
  Card, Grid, Button, Form, Checkbox ,Segment, Header
} from 'semantic-ui-react'

import { handleSaveQuestionAnswer } from './../actions/questions'
import { formatDate } from '../utils/helpers'

class QuestionPoll extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      answered: false,
    };
  }

  handleChange = (event, { value }) => this.setState({ value })

  handleSubmit = (event, { value }) =>{
    event.preventDefault();
    this.props.saveQuestionAnswer(value);
    this.setState({
      answered: true
    });
  }

  render(){
    const { author, optionOne, optionTwo, timestamp, id } = this.props.question;
    const { answered } = this.state;
    if(answered)
    {
      return <Redirect to={`/question/${id}`} />
    }
    return(

        <Card fluid>
             <Card.Content>
               <Card.Header>{author.name} asks:</Card.Header>
               <Card.Description>
               <Grid>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <Avatar name={author.name} className="avatar"/>
                  </Grid.Column>
                  <Grid.Column width={10}>
                  <Form onSubmit={e => this.handleSubmit(e,
                      {value:{
                      qid: id,
                      answer: this.state.value,
                      }
                    }
                  )}>
                      <Segment  raised padded>
                        <Header as='h3' block>
                        <Form.Field>
                          Would you rather ...
                          <b>
                            {
                              this.state.value === 'optionOne' ?
                              optionOne.text : optionTwo.text
                            }
                          </b>
                        </Form.Field>
                        </Header>
                        <Form.Field>
                        <h2>
                          <Checkbox
                            radio
                            label={optionOne.text}
                            name='checkboxRadioGroup'
                            value='optionOne'
                            checked={this.state.value === 'optionOne'}
                            onChange={this.handleChange}
                          />
                          </h2>
                        </Form.Field>
                        <Form.Field>
                        <h2>
                        <Checkbox
                          radio
                          label={optionTwo.text}
                          name='checkboxRadioGroup'
                          value='optionTwo'
                          checked={this.state.value === 'optionTwo'}
                          onChange={this.handleChange}
                        />
                        </h2>
                        </Form.Field>
                      </Segment>
                      <Button primary type='submit'
                        disabled={!(this.state.value === 'optionOne' || this.state.value === 'optionTwo')}
                        >Submit
                      </Button>
                  </Form>
                  </Grid.Column>
                </Grid.Row>
                </Grid>
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
              <span className='date'>{formatDate(timestamp)}</span>
             </Card.Content>
           </Card>
   )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    saveQuestionAnswer: (option) => dispatch(handleSaveQuestionAnswer(option)),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(QuestionPoll))
