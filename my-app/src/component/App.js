import React from 'react'
import Home  from './Home'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}
