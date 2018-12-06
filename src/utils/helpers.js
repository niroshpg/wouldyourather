export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (Question, author, authedUser, parentQuestion) {
  const { id,optionOne,optionTwo, text, timestamp } = Question
  const { name, avatarURL } = author

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
