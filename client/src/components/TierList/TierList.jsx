import React, {useState, useEffect} from 'react'
import axios from 'axios'

const TierList = () => {
  axios
  .get('/tierlist/assault_rifles')
  .then(res => console.log(res))

  return(
    <div>
      <h2>Tier List</h2>
      <div>

      </div>
    </div>
  )
}

export default TierList