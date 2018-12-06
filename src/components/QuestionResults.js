import React from 'react'

import { Card, Icon,Grid, Image , Button,Label, Progress, Segment, Header} from 'semantic-ui-react'
import Avatar from 'react-avatar'

import { formatQuestion, formatDate } from '../utils/helpers'

export default function QuestionResults(props){

  const {
    name, author,avatar,optionOne, optionTwo, timestamp, text, id, parent
  } = props.question
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
                          <Label circular color='yellow' floating left>
                            Your Vote
                          </Label>
                          Would you rather {optionOne.text}
                        </Header>

                        <Progress percent={50} progress success>
                          50%
                        </Progress>
                      </Segment>

                      <Segment  raised padded>
                          <Header as='h3' block>
                            Would you rather {optionTwo.text}
                          </Header>

                        <Progress percent={50} progress success>
                          50%
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
