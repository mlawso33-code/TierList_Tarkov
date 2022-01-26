import React, { useState, useEffect } from 'react'
import axios from 'axios'

import LoadingScreen from '../LoadingScreen/LoadingScreen.jsx'
import AppContext from '../App/AppContext.jsx'
import TierList from '../TierList/TierList.jsx'
import Forum from '../Forum/Forum.jsx'


const App = () => {
  const [assaultRifles, setARs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  useEffect(() => {
    axios.get(`/tierlist/assault_rifles/1`)
      .then(res => setARs(res.data))
  }, [])


  console.log(assaultRifles)

  return (
    <>
    {loading === false ? (
    <div>
      <h1>Tarkov Weapon List</h1>
      <AppContext.Provider value={{
        assaultRifles
      }} >
        <TierList />
        <Forum />
      </AppContext.Provider>
    </div>
    ) : (
      <LoadingScreen/>
      )
    }
    </>
  )
}

export default App