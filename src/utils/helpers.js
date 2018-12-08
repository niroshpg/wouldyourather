export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author, authedUser, parentQuestion) {
  const { id,optionOne,optionTwo, text, timestamp } = question
  const { avatarURL } = author
debugger
  return {
    name: optionOne.text,
    id,
    author:author,
    timestamp,
    text,
    avatar: avatarURL,
    optionOne,
    optionTwo,
    parent: null
  }
}
