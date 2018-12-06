import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

import {Tab,  Button} from 'semantic-ui-react'


class Dashboard extends Component {
  render() {
    const {unAnsweredIds,answeredIds} = this.props;
    return (
      <div>
            <Tab {...this.props}  menu={{ secondary: true }} panes={[
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

function mapStateToProps ({ Questions,authedUser }) {
  const qids = Object.keys(Questions)
    .sort((a,b) => Questions[b].timestamp - Questions[a].timestamp);
  return {
      questionIds: qids,
      answeredIds: qids.filter((q)=>{
        return Questions[q].optionOne.votes.concat(Questions[q].optionTwo.votes).find(
          e =>{return e ===authedUser} ) !==undefined
      }),
      unAnsweredIds:  qids.filter((q)=>{
        return Questions[q].optionOne.votes.concat(Questions[q].optionTwo.votes).find(
          e =>{return e ===authedUser} ) ===undefined
      }),
      authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)
