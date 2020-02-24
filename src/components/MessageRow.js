import React from 'react';

function MessageRow({ timestamp, userName, message, itsMe }) {
  const messageAuthor = () => {
    const author = itsMe ? 'me' : userName
    let classList = 'userName'
    if (itsMe) {
      classList += ' itsme'
    }
    return (<div className={classList}>{author}:</div>)
  }

  const messageTime = () => {
    const date = new Date(timestamp)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  return message.trim().length > 0 ?(
    <div className='message-row'>
      {messageAuthor()}
      <div className='userMessage'>{message}</div>
      <div className='timestamp'>{messageTime()}</div>
      
    </div>
  ) : null;
}

export default MessageRow;
