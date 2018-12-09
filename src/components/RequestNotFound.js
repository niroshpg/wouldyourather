import React from 'react'
import { Card } from 'semantic-ui-react'

export default function ResourceNotFound(props){
  return(
    <Card fluid>
         <Card.Content>
           <Card.Header>HTTP 404</Card.Header>
           <Card.Description>
            <h3>Resource Not Found</h3>
           </Card.Description>
         </Card.Content>
    </Card>
  )
}
