import React from 'react'
import { Link } from 'react-router-dom'  
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <Link to="/dashboard/*"> Go to Dashboard</Link>
        <Link to="/dashboard/profile/0b5969d9-d0da-4e28-a3a0-f91eaf54afb2"> Go to Profile</Link>
        <Link to="/dashboard/main"> Go to Main</Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
