import React from 'react'
import './css/style.css'
import NavDaPagina from '../NavDaPagina';
import {Outlet} from 'react-router-dom'
export default function Layout() {
  return (

  <>
      <header>
        <div className="header__container">
            <h1 className="header__titulo">MUSEU <span>NACIONAL</span></h1>
            <NavDaPagina />
        </div>
        
      </header>
      
      <Outlet/>
  </>
  )
}
