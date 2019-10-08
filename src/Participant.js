import React from 'react';

export const RenderParticipant = (props) => {
  const isOnStage = props.onStage;
  return (
    <section className='participant-container'>
      <img src={props.avatar} alt="user avatar" className="participant-avatar" />
      <section className="participant-name">{props.name}</section>
      <section className="participant-on-stage">{isOnStage ? ('on stage') : ('in session')}</section>
    </section>
  )
}