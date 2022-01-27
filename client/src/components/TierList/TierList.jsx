import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import AppContext from '../App/AppContext.jsx'
import VoteModal from './VoteModal.jsx'

const TierList = () => {
  const { assaultRifles } = useContext(AppContext)

  const [sTier, setS] = useState([])
  const [aTier, setA] = useState([])
  const [bTier, setB] = useState([])
  const [cTier, setC] = useState([])
  const [dTier, setD] = useState([])
  const [fTier, setF] = useState([])
  const [vote, setVote] = useState(assaultRifles[0].votes)
  const [disable, setDisabled] = useState(false)
  const [displayModal, setDisplayModal] = useState(false);

  const [image, setImage] = useState('')

  function changeDisplayModal() {
    setDisplayModal(!displayModal)
  }

  function voteRange(wepVote) {
    if (wepVote >= 1 && wepVote <= 2) {
      setF(assaultRifles)
    } else if (wepVote >= 3 && wepVote <= 5) {
      setF([])
      setD(assaultRifles)
    } else if (wepVote >= 6 && wepVote <= 8) {
      setD([])
      setC(assaultRifles)
    } else if (wepVote >= 9 && wepVote <= 11) {
      setC([])
      setB(assaultRifles)
    } else if (wepVote >= 12 && wepVote <= 14) {
      setB([])
      setA(assaultRifles)
    } else if (wepVote >= 15 && wepVote <= 17) {
      setA([])
      setS(assaultRifles)
    } else {
      null
    }
  }

  function updateVote(weaponId) {
    var voteObj = {
      vote: vote
    }
    axios
      .put(`/tierlist/assault_rifles/${weaponId}`, voteObj)
  }
  function increaseVote(num) {
    setVote(vote + 1)
  }
  function decreaseVote(num) {
    setVote(vote - 1)
    if (sTier[0] && vote < 17) {
      setS([])
    }
    if (aTier[0] && vote < 14) {
      setA([])
    }
    if (bTier[0] && vote < 11) {
      setB([])
    }
    if (cTier[0] && vote < 8) {
      setC([])
    }
    if (dTier[0] && vote < 5) {
      setD([])
    }
    if (fTier[0] && vote < 2) {
      setF([])
    }
  }

  function handleDisable() {
    if (vote <= 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  useEffect(() => {
    voteRange(vote)
    updateVote(assaultRifles[0].id)
    setImage(assaultRifles[0].url)
    handleDisable()
  }, [vote])

  return (
    <div>
      <h2>Tier List</h2>
      <div className="tierList">
        <div id="eachTier">
          S <span id="tierWeapons">{sTier.map((weapon) => (<img src={weapon.url} width="150" height="50" />))}</span>
        </div>
        <div id="eachTier">
          A <span id="tierWeapons">{aTier.map((weapon) => (<img src={weapon.url} width="150" height="50" />))}</span>
        </div>
        <div id="eachTier">
          B <span id="tierWeapons">{bTier.map((weapon) => (<img src={weapon.url} width="150" height="50" />))}</span>
        </div>
        <div id="eachTier">
          C <span id="tierWeapons">{cTier.map((weapon) => (<img src={weapon.url} width="150" height="50" />))}</span>
        </div>
        <div id="eachTier">
          D <span id="tierWeapons">{dTier.map((weapon) => (<img src={weapon.url} width="150" height="50" />))}</span>
        </div>
        <div id="eachTier">
          F  <span id="tierWeapons">{fTier.map((weapon) => (<img src={weapon.url} width="150" height="50" />))}</span>
        </div>
        <div className="weaponList">
          <div id="eachWeapon">
            <img src={image} alt="Rifle" width="250" height="100" />
            <button onClick={changeDisplayModal}>Show Details</button>
          </div>
        </div>
        <div className={`Modal ${displayModal ? 'Show' : ''}`}>
          <VoteModal modal={changeDisplayModal} vote={vote}
            increase={increaseVote} decrease={decreaseVote} rifle={assaultRifles[0]} disable={disable} />
        </div>
        <div className={`Overlay ${displayModal ? 'Show' : ''}`} />
      </div>
    </div>
  )
}

export default TierList