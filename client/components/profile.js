import React from 'react'
import { Link, useParams } from 'react-router-dom'  
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Profile" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Profile {user}
        <Link to="/dashboard"> Go to Root</Link>
        <Link to="/dashboard/main"> Go to Main</Link>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
