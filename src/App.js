import React, { Component } from 'react';
import { RenderParticipant } from './Participant';

import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      participants: []
    }
  }

  render() {

    const { store } = this.props
    const newList = store.participants.sort((x, y) => x.onStage === true ? -1 : +1)
    const pOnStage = store.participants.filter(item => item.onStage === true);
    return (
      <div className="App">
        <div className='toggles'></div>
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
        <div className="stage">
          {pOnStage.map(person => {
            return (
              <RenderParticipant
                key={person.id}
                avatar={person.avatar}
                name={person.name}
                onStage={person.onStage}
              />
            )
          })}
        </div>
        <div className="chat-log"></div>
        <div className="bottom-bar"></div>
      </div>
    )
  }
}

export default App;