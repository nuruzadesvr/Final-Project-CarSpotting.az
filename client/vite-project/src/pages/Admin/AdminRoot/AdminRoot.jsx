import React from 'react'
import Header from '../../../layout/Admin/Header/Header'
// import Footer from '../../../layout/Admin/Footer/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../AdminSidebar/SideBar'

function AdminRoot() {
  return (
<>
    <SideBar/>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
</>
  )
}

export default AdminRoot
