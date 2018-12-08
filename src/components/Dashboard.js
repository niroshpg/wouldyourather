import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

import {Tab } from 'semantic-ui-react'


class Dashboard extends Component {
  render() {
    const {unAnsweredIds,answeredIds,authedUser,questionIds,dispatch,staticContext,...otherProps} = this.props;

    return (
      <div>
            <Tab {...otherProps}  menu={{ secondary: true }} panes={[
              {
                menuItem: 'Unaswered',
                render: props =>
                <Tab.Pane attached={true}>
                      <ul>
                        {unAnsweredIds.map((id) => (
                          <li key={id}>
                            <Question id={id} answered={false} summary={true} />
                          </li>
                        ))}
                      </ul>
                </Tab.Pane>
            },
              { menuItem: 'Answered', render: props =>
              <Tab.Pane attached={true}>
                  <ul>
                    {answeredIds.map((id) => (
                      <li key={id}>
                        <Question id={id} answered={true}  summary={true}/>
                      </li>
                    ))}
                  </ul>
            </Tab.Pane>
            }
            ]}/>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {

  const qids = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
  return {
      questionIds: qids,
      answeredIds: qids.filter((q)=>{
        return questions[q].optionOne.votes.concat(questions[q].optionTwo.votes).find(
          e =>{return e ===authedUser} ) !==undefined
      }),
      unAnsweredIds:  qids.filter((q)=>{
        return questions[q].optionOne.votes.concat(questions[q].optionTwo.votes).find(
          e =>{return e ===authedUser} ) ===undefined
      }),
      authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
