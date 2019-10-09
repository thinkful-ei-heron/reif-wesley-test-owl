import React, { Component } from 'react';

import { RenderParticipant } from './Participant';
import { RenderStageParticipant } from './Stage';
import { RenderChatItem } from './Chat';

import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: []
    }
  }

  render() {

    const { store } = this.props
    const newList = store.participants.sort((x, y) => x.onStage === true ? -1 : +1)
    const pOnStage = store.participants.filter(item => item.onStage === true);

    const displayParticipants = () => {
      let target = document.querySelector('.participant-list-container')
      target.style.display = 'block'
      let hide = document.querySelector('.chat-log')
      hide.style.display = 'none'
    }
    const displayChat = () => {
      let target = document.querySelector('.participant-list-container')
      target.style.display = 'none'
      let hide = document.querySelector('.chat-log')
      hide.style.display = 'block'
    }

    return (
      <div className="App">
        <div className='toggles'>
          <button id='chat-button' onClick={displayChat}>chat</button>
          <button id='participants-button' onClick={displayParticipants}>participants</button>
        </div>
        <div className='participant-list-container'>
          {newList.map(person => {
            return (
              <RenderParticipant
                key={person.id}
                avatar={person.avatar}
                name={person.name}
                inSession={person.inSession}
                onStage={person.onStage}
              />)
          })}
        </div>
        <div className="chat-log" hidden>
          {store.chatEvents.map(chat => {
            return (
              <RenderChatItem
                key={Math.random()}
                avatar={(store.participants.find(item => item.id === chat.participantId)).avatar}
                name={(store.participants.find(item => item.id === chat.participantId)).name}
                type={chat.type}
                message={chat.message}
                time={new Date(chat.time)}
              />
            )
          })}
        </div>
        <div className="stage">
          {pOnStage.map(person => {
            return (
              <RenderStageParticipant
                key={person.id}
                avatar={person.avatar}
                name={person.name}
              />
            )
          })}
        </div>
        <div className="bottom-bar"></div>
      </div>
    )
  }
}

export default App;
