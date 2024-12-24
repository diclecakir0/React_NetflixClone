 import React from 'react'
 import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
 
 const Header = () => {
   return (
	 <header className='p-4'>
    <Link to={'/'}>
    <img style={{maxWidth: '100px'}} src={logo} alt="" />
    </Link>
   </header>
   )
 }
 
 export default Header