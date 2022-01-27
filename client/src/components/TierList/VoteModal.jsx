import React, { useState } from 'react'

const VoteModal = ({ modal, increase, decrease, rifle, vote, disable }) => {


  return (
    <div>
      <div className="modalTitle">{rifle.name}
        <button onClick={modal}>
          X
        </button></div>
      <br />
      <img src={rifle.url} />
      <br />
      <span>Description: {rifle.description}</span>
      <br />
      <span>Ballistic: *Coming Soon*</span>
      <br />
      Vote:
       <span className="voteIcons">
       <button onClick={increase}><i className="fas fa-caret-square-up"></i> </button>//
       <button disabled={disable} onClick={decrease}><i className="fas fa-caret-square-down"></i></button>
         </span>
       <br />
       Current Vote: {vote}
    </div>
  )
}

export default VoteModal