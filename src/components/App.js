import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import Nav from './Nav'
import PrivateRoute from './PrivateRoute'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          <Route path='/login' component={Login} />
           <PrivateRoute path='/' exact component={Dashboard} />
           <PrivateRoute path='/question/:id' component={QuestionPage} />
           <PrivateRoute path='/new' component={NewQuestion} />
           <PrivateRoute path='/leaderboard' component={LeaderBoard} />
         </div>
        </Fragment>
        </Router>
    )
  }
}

export default connect()(App)
