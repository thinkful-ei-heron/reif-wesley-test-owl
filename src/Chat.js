import React from 'react';

export const RenderChatItem = (props) => {
  let chatMessage;
  if (props.type === 'message') {
    chatMessage = (<section className="chat-item">
      <img src={props.avatar} alt='avatar' className='chat-avatar' />
      <p className='chat-name'>{props.name}</p>
      <p className='chat-time'>{(props.time).toString()}</p>
      <p className='chat-message'>{props.message}</p>
    </section>)
  } else {
    switch (props.type) {
      case 'thumbs-up':
        chatMessage = <p>{props.name} gave a thumbs up.</p>
        break
      case 'thumbs-down':
        chatMessage = <p>{props.name}gave a thumbs down.</p>
        break
      case 'raise-hand':
        chatMessage = <p>{props.name} raised their hand.</p>
        break
      case 'clap':
        chatMessage = <p>{props.name} clapped.</p>
        break
      case 'leave':
        chatMessage = <p>{props.name} left the session.</p>
        break
      case 'join-stage':
        chatMessage = <p>{props.name} joined the stage.</p>
        break
      case 'leave-stage':
        chatMessage = <p>{props.name} left the stage.</p>
        break
      default:
        chatMessage = <p>defaulted</p>
    }
  }

  return (
    chatMessage
  )
}