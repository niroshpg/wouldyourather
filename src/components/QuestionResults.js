import React from 'react'

import { Card, Grid ,Label, Progress, Segment, Header} from 'semantic-ui-react'
import Avatar from 'react-avatar'

import { formatDate } from '../utils/helpers'

export default function QuestionResults(props){

  const { author, optionOne, optionTwo, timestamp } = props.question;
  const votes1 = optionOne && optionOne.votes ? optionOne.votes.length : 0;
  const votes2 = optionTwo && optionTwo.votes ? optionTwo.votes.length : 0;
  const percent1 = (votes1/(votes1+votes2))*100;
  const percent2 = (votes2/(votes1+votes2))*100;
  
  return(
    <Card fluid>
         <Card.Content >
           <Card.Header>Asked by {author.name}</Card.Header>
           <Card.Description >
           <Grid padded>
            <Grid.Row >
              <Grid.Column width={6}>
                <Avatar name={author.name} className="avatar"/>
              </Grid.Column>
              <Grid.Column width={10}>
                <h3>Results</h3>
                      <Segment  raised padded>
                        <Header as='h3' block>
                          <Label circular color='yellow' className="floating left">
                            Your Vote
                          </Label>
                          Would you rather {optionOne.text}
                        </Header>
                        <Progress percent={percent1} progress success>
                          {percent1}%
                        </Progress>
                      </Segment>
                      <Segment  raised padded>
                          <Header as='h3' block>
                            Would you rather {optionTwo.text}
                          </Header>
                        <Progress percent={percent2} progress success>
                          {percent2}%
                        </Progress>
                      </Segment>
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
