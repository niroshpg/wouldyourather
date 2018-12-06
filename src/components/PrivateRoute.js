import React,{Component} from 'react'
import {connect} from 'react-redux'
import {  Route ,Redirect, withRouter} from 'react-router-dom'

const PrivateRoute = ({ component : Component, ...otherProps }) => {
    const {isAuthenticated} = otherProps;
    
     return (
       <Route {...otherProps}
         render={
           (props) => (
             isAuthenticated
               ?
               <Component {...props} />
               :
               <Redirect to={{
                   pathname: '/login',
                   state: { from: props.location }
               }} />
           )
         }
       />
     )
}

function mapStateToProps ({ authedUser }) {
  return {
    isAuthenticated: (authedUser !== null),
  }
}

export default connect(mapStateToProps,null,null,{ pure: false })(withRouter(PrivateRoute))
