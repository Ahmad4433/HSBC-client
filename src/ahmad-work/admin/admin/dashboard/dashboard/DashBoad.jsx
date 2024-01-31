import React from 'react'
import {Routes,Route} from 'react-router-dom'
import TopGainer from '../General Statistic/TopGainer'
import Total from '../General Statistic/Total'
const DashBoad = () => {
  return (
    <Routes>
        <Route path='/' element={TopGainer} />

    </Routes>
  )
}

export default DashBoad
