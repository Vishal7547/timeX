import React from 'react'
import './style/navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header className='navbarContainer'>
<Link to='/' style={{textDecoration:"none"}}>
        <div id='logo'><h1>TimeX</h1></div>

</Link>
      </header>
    </div>
  )
}

export default Navbar
