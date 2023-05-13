import React,{useContext} from 'react'
import {auth} from '../firebase'
import {AuthContext} from '../context/AuthContext'
import {signOut} from "firebase/auth"

const Navbar = () => {

const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
    <span className='logo'>Wechat</span>
    <div className="user">
      <img src={currentUser.photoURL} alt="" />
      <span>{currentUser.displayName}</span>
      <button onClick={()=>signOut(auth)}>logout</button>
    </div>
      </div>
  )
}

export default Navbar