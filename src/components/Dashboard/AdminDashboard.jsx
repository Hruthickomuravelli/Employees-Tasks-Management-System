import React from 'react'
import Header from '../others/header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import AdminHeader from '../others/AdminHeader'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
      <AdminHeader changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
