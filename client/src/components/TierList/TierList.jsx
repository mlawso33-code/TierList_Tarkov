import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import AppContext from '../App/AppContext.jsx'

const TierList = () => {
  const { assaultRifles } = useContext(AppContext)

  const [sTier, setS] = useState([])
  const [aTier, setA] = useState([])
  const [bTier, setB] = useState([])
  const [cTier, setC] = useState([])
  const [dTier, setD] = useState([])
  const [fTier, setF] = useState([])
  const [vote, setVote] = useState(assaultRifles[0].votes)

  const [image, setImage] = useState('')
  console.log('image:::', image)
  function voteRange(wepVote) {
    if (wepVote >= 0 && wepVote <= 2) {
      setF(assaultRifles)
    } if (wepVote >= 3 && wepVote <= 5) {
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
  function increaseVote(num) {
    setVote(vote + 1)
  }
  function decreaseVote(num) {
    setVote(vote - 1)
  }

  useEffect(() => {
    voteRange(vote)
    setImage(assaultRifles[0].url)
  }, [vote])


  return (
    <div>
      <h2>Tier List</h2>
      <div className="tierList">
        <div id="eachTier">
          S <span id="tierWeapons">{sTier.map((weapon) => (<img src={weapon.url} width="150" height="50"/>))}</span>
        </div>
        <div id="eachTier">
          A <span id="tierWeapons">{aTier.map((weapon) => (<img src={weapon.url} width="150" height="50"/>))}</span>
        </div>
        <div id="eachTier">
          B <span id="tierWeapons">{bTier.map((weapon) => (<img src={weapon.url} width="150" height="50"/>))}</span>
        </div>
        <div id="eachTier">
          C <span id="tierWeapons">{cTier.map((weapon) => (<img src={weapon.url} width="150" height="50"/>))}</span>
        </div>
        <div id="eachTier">
          D <span id="tierWeapons">{dTier.map((weapon) => (<img src={weapon.url} width="150" height="50"/>))}</span>
        </div>
        <div id="eachTier">
          F  <span id="tierWeapons">{fTier.map((weapon) => (<img src={weapon.url} width="150" height="50"/>))}</span>
        </div>
        <div className="ak103">
          <span><img src={image} alt="Rifle" width="250" height="100" /> ({vote}) </span>
          <i class="fas fa-caret-square-up" onClick={increaseVote}></i>

          <i class="fas fa-caret-square-down" onClick={decreaseVote}></i>
        </div>
      </div>
    </div>
  )
}

export default TierList