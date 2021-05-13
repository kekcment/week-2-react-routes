import React from 'react'
import { Link } from 'react-router-dom'  
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        Main
        <Link to="/dashboard/profile/0b5969d9-d0da-4e28-a3a0-f91eaf54afb2 "> Go to Profile</Link>
        <Link to="/dashboard"> Go to Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
