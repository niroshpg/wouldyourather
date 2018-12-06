import React from 'react'

import { Card, Icon,Grid, Image , Button,Label, Progress, Segment, Header} from 'semantic-ui-react'
import Avatar from 'react-avatar'

import { formatQuestion, formatDate } from '../utils/helpers'

export default function LeadBoardEntry(props){

  const {
    user, answered, created, score
  } = props.entry;
  return(
      <div className='Question'>
      <Card fluid>
         <Card.Content >
           <Card.Header>{user.name}</Card.Header>
           <Card.Description >
           <Grid padded>
            <Grid.Row>
              <Grid.Column width={6}>
                <Avatar name={user.name} className="avatar"/>
              </Grid.Column>
              <Grid.Column width={10} >
                  <h3>{user.name}</h3>
                    <Segment  raised >
                      Answered questions:  {answered}
                    </Segment>

                    <Segment  raised >
                      Created questions:  {created}
                    </Segment>


                    <Label circular color='green' floating left>
                    score:  {score}
                    </Label>
              </Grid.Column>
            </Grid.Row>
            </Grid>
           </Card.Description>
         </Card.Content>

       </Card>

    </div>

  )
}
