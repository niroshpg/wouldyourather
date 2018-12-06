import React, {Component} from 'react'
import {connect} from 'react-redux'

import { NavLink ,withRouter } from 'react-router-dom'
import { Menu,Button} from 'semantic-ui-react'
import AuthButton from './AuthButton'

const Nav = (props) => {
   const {isAuthenticated,authedUser} = props
    return (
      <Menu>
          <Menu.Item name='home'>
            <NavLink to='/' exact activeClassName='active'>
               Home
             </NavLink>
          </Menu.Item>

         <Menu.Item name='new' >
           <NavLink to='/new' activeClassName='active'>
             New Question
           </NavLink>
         </Menu.Item>

        <Menu.Item name='leaderboard'>
           <NavLink to='/leaderboard' activeClassName='active'>
             Leader Board
           </NavLink>
         </Menu.Item>
         {
           isAuthenticated &&
           <Menu.Item name='login' position='right'>
              <p>Welcome {authedUser.name} !</p>
            </Menu.Item>
         }

         <Menu.Item name='login' position='right'>
            <AuthButton/>
          </Menu.Item>
       </Menu>
    )
}

function mapStateToProps ({ authedUser,users }) {
  return {
    isAuthenticated: (authedUser !== null),
    authedUser: users[authedUser],
  }
}

export default connect(mapStateToProps)(withRouter(Nav))
