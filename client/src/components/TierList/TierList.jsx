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
  }, [vote])


  return (
    <div>
      <h2>Tier List</h2>
      <div className="tierList">
        <div id="eachTier">
          S <span id="tierWeapons">{sTier.map((weapon) => (<span>{weapon.name}</span>))}</span>
        </div>
        <div id="eachTier">
          A <span id="tierWeapons">{aTier.map((weapon) => (<span>{weapon.name}</span>))}</span>
        </div>
        <div id="eachTier">
          B <span id="tierWeapons">{bTier.map((weapon) => (<span>{weapon.name}</span>))}</span>
        </div>
        <div id="eachTier">
          C <span id="tierWeapons">{cTier.map((weapon) => (<span>{weapon.name}</span>))}</span>
        </div>
        <div id="eachTier">
          D <span id="tierWeapons">{dTier.map((weapon) => (<span>{weapon.name}</span>))}</span>
        </div>
        <div id="eachTier">
          F  <span id="tierWeapons">{fTier.map((weapon) => (<span>{weapon.name}</span>))}</span>
        </div>
        <div className="ak103">
          {/* <img src="./TierList/AK-103_7.62x39.jpg" alt="Rifle" width="250" height="100"/> */}
          <span>AK-103 7.62x39 ({vote})</span>
          <button onClick={increaseVote}>Vote up</button>
          <button onClick={decreaseVote}>Vote down</button>
        </div>
      </div>
    </div>
  )
}

export default TierList