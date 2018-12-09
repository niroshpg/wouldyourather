import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from 'react-avatar'
import { Card, Button, Form, Dropdown } from 'semantic-ui-react'

import { setAuthedUser } from './../actions/authedUser'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedUser: 'tylermcginnis',
    };
    this.onUserSelected = this.onUserSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event)=>{
    /**
      set redirect to the refere or home
    */
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    this.props.setAuthedUser(this.state.selectedUser);
    this.props.history.push(from.pathname);
  }

   onUserSelected=(event,data)=>{
     const {value} = data;
     this.setState({
       selectedUser: value,
     })
   }

  render(){
    const {users} = this.props;
    const {selectedUser} = this.state;
    const userNames = Object.keys(users).map((user)=> {
      return {
        value: users[user].id,
        text: users[user].name,
        }
    });
    return(
      <Card  className="ui centered card"  style={{maxWidth: '800px'}} >
           <Card.Content>
             <Card.Header>Welcome to Would You Rather App!</Card.Header>
             <Card.Description  style={{textAlign: 'center'}}>
               <Avatar name='Would You Rather' className="avatar"/>
               <Form onSubmit={this.handleSubmit}>
                 <Form.Field style={{marginTop: '20px'}}>
                       <label style={{float: 'left'}}>SignIn:</label>
                       <Dropdown search selection
                        className="ui fluid dropdown"
                        onChange={this.onUserSelected}
                        options={userNames}
                        defaultValue={selectedUser}
                        placeholder='select user'
                       />
                   </Form.Field>
                 <Button primary fluid type='submit'>Login</Button>
               </Form>
             </Card.Description>
           </Card.Content>
      </Card>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setAuthedUser: (id) => dispatch(setAuthedUser(id)),
  }
}

function mapStateToProps ({ users }) {
  return {
    users: users,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
