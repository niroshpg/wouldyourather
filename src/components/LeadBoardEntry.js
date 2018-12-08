import React from 'react'
import { Card, Grid, Label, Segment } from 'semantic-ui-react'
import Avatar from 'react-avatar'

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

                    <Segment  raised >
                      Answered questions:  {answered}
                    </Segment>

                    <Segment  raised >
                      Created questions:  {created}
                    </Segment>


                    <Label circular color='green' className="floating left">
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
