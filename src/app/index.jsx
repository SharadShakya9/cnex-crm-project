import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function CnexProject() {
  return (
    <div>
      <Sidebar>
        <Outlet/>
      </Sidebar>
    </div>
  )
}

export default CnexProject
