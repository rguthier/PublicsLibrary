import React from 'react'
import './NavBar.css'
import open_book from '../../assets/open-book.png'
const Navbar = () => {
  return (
    <div className='navbar-links'>
      
      <img src={open_book} alt="" className='logo'/>

      <div className='search-box'> 
        <input type='text' placeholder='Search Books...'/>
        <i class="material-symbols-outlined">search</i>
        
      </div>

      <ul>
        <li>Home</li>
        <li>Browse Books</li>
        <li>My Library</li>
        <li>Trade Requests</li>
        <li>Community</li>
      </ul>
    
      <div className='person-acc'> 
        <i class="material-symbols-rounded">person</i>
      </div>
      
          
      
    </div>
  )
}

export default Navbar
