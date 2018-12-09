import React from 'react'
import {connect} from 'react-redux'
import {
  withRouter
} from 'react-router-dom'

import { Button } from 'semantic-ui-react'
import { hideLoading } from 'react-redux-loading'
import { clearAuthedUser } from '../actions/authedUser'

const AuthButton =  ( {isAuthenticated, clearAuthedUser, hideLoading, history} ) => {
  return(
      isAuthenticated ?
        <Button primary onClick={() => {
            clearAuthedUser();
            history.push('/login');
            hideLoading();
          }}>
          Log out
        </Button>
      :
      <p>Please log in</p>
  )
}

function mapStateToProps ({ authedUser }) {
  const auth =  (authedUser !== null);

  return {
    isAuthenticated: auth,
    authedUser: authedUser,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    clearAuthedUser: (data) => dispatch(clearAuthedUser()),
    hideLoading: () => dispatch(hideLoading()),
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AuthButton))
