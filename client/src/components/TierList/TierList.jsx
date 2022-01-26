import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import AppContext from '../App/AppContext.jsx'

const TierList = () => {
  //const [assaultRifles, setARs] = useState([])
  const {assaultRifles} = useContext(AppContext)

    // axios.get(`/tierlist/assault_rifles/1`)
    //   .then(res => console.log(res.data))

  console.log('ar:::', assaultRifles[0].url)
  return (
    <div>
      <h2>Tier List</h2>
      <div className="tierList">
        <div id="eachTier">
          S
        </div>
        <div id="eachTier">
          A
        </div>
        <div id="eachTier">
          B
        </div>
        <div id="eachTier">
          C
        </div>
        <div id="eachTier">
          D
        </div>
        <div id="eachTier">
          F
        </div>
        <div className="ak103">
          {/* <img src="./TierList/AK-103_7.62x39.jpg" alt="Rifle" width="250" height="100"/> */}
          AK-103 7.62x39
        </div>
      </div>
    </div>
  )
}

export default TierList