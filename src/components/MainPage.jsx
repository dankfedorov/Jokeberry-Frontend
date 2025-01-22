import React from 'react'
import SidebarMenu from './SidebarMenu'
import "../assets/styles/dashboard.css";

function MainPage() {
  return (
    <div>
      <div className="container-fluid dashboard__container">
        <div className="row">
          {/* Левое меню */}
          <SidebarMenu/>
          {/* Центральный блок */}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main__container">
            
          
            


          </main>
        </div>
      </div>
    </div>
  )
}

export default MainPage