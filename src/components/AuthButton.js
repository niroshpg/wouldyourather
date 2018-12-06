import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
  withRouter
} from 'react-router-dom'

import {Button} from 'semantic-ui-react'
import {  showloading,hideLoading } from 'react-redux-loading'
import {clearAuthedUser} from '../actions/authedUser'

class AuthButton  extends Component {

  render(){
    const {isAuthenticated} = this.props;

    return (
      isAuthenticated ?

          <Button primary onClick={() => {
              this.props.clearAuthedUser();
              this.props.history.push('/login');
              this.props.hideLoading();
            }}>
            Log out
          </Button>
    

        :
        // <Button primary>Log in</Button>
        <p>Please log in</p>
      )
  }
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
    showloading: () => dispatch(showloading()),
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AuthButton))
