import React from 'react'


import TierList from '../TierList/TierList.jsx'
import Forum from '../Forum/Forum.jsx'

const App = () => {
  return(
    <div>
      <h1>Tarkov Weapon List</h1>
      <TierList />
      <Forum />
    </div>
  )
}

export default App