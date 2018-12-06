import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon,Grid, Image , Button} from 'semantic-ui-react'
import Avatar from 'react-avatar'

import { formatQuestion, formatDate } from '../utils/helpers'

export default function QuestionSummary(props){

  const {
    name, author,avatar,optionOne, timestamp, text, id, parent
  } = props.question
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
                <h3>Would you rather </h3>
                <h3>{`...${name}...` }</h3>
                <Button>
                  <Link to={`/question/${id}`} >
                  View Poll
                  </Link>
                  </Button>
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
