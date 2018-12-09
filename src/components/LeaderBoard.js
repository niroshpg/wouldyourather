import React from 'react'
import { connect } from 'react-redux'
import LeadBoardEntry from './LeadBoardEntry'

const LeaderBoard = ({entries}) => {
  return(
    <div>
      <h3 className='center'>Your LeaderBoard</h3>
      { <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <LeadBoardEntry key={entry.id} entry={entry}/>
          </li>
        ))}
      </ul>}
    </div>
  )
}

function mapStateToProps ({ questions ,users}) {
  const qids = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

  return {
    entries : Object.keys(users).map((user)=>{
      const answered = qids.filter((q)=>{
          return questions[q].optionOne.votes.concat(questions[q].optionTwo.votes).find(
            e =>{return e === user } ) !==undefined
      });

      const created =  qids.filter((q)=>{
          return questions[q].author === user;
      });

      const score = answered.length + created.length;

      return ({
        id: user,
        user: users[user],
        answered : answered.length,
        created: created.length,
        score: score,
      })
    }).sort((a,b)=> b.score - a.score )
  }
}

export default connect(mapStateToProps)(LeaderBoard)
