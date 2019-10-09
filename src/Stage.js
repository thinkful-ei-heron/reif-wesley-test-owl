import React from 'react';

export const RenderStageParticipant = (props) => {
  return (
    <section className='participant-stage-container'>
      <img src={props.avatar} alt="user avatar" className="participant-avatar" />
      <section className="participant-stage-name">{props.name}</section>
      <p>volume stuff goes here</p>
    </section>
  )
}