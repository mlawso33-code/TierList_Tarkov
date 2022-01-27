import React from 'react'

const VoteModal = ({ modal, increase, decrease, rifle, vote, disable }) => {
  return (
    <div>
      <div className="modalTitle">{rifle.name}
        <button onClick={modal}>
          X
        </button></div>
      <br />
      <img src={rifle.url} alt="Rifle" width="323" height="115"/>
      <br />
      <span>Description: {rifle.description}</span>
      <br />
      <span>Ballistic: *Coming Soon*</span>
      <br />
      Vote:
       <span className="voteIcons">
       <button id="increaseButton" onClick={increase}><i className="fas fa-caret-square-up"></i> </button>//
       <button id="decreaseButton" disabled={disable} onClick={decrease}><i className="fas fa-caret-square-down"></i></button>
         </span>
       <br />
       Current Vote: {vote}
    </div>
  )
}

export default VoteModal