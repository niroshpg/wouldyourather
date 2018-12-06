import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import LeadBoardEntry from './LeadBoardEntry'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your LeaderBoard</h3>
        { <ul>
          {this.props.entries.map((entry) => (
            <li key={entry.id}>
              <LeadBoardEntry entry={entry}/>
            </li>
          ))}
        </ul>}
      </div>
    )
  }
}

function mapStateToProps ({ Questions ,users}) {
  const qids = Object.keys(Questions)
    .sort((a,b) => Questions[b].timestamp - Questions[a].timestamp);

  return {
    entries : Object.keys(users).map((user)=>{
      const answered = qids.filter((q)=>{
          return Questions[q].optionOne.votes.concat(Questions[q].optionTwo.votes).find(
            e =>{return e === user } ) !==undefined
      });

      const created =  qids.filter((q)=>{
          return Questions[q].author == user;
      });

       const score = answered.length + created.length;


      return ({
        user: users[user],
        answered : answered.length,
        created: created.length,
        score: score,
      })
    }).sort((a,b)=> b.score - a.score )
  }
}

export default connect(mapStateToProps)(LeaderBoard)
