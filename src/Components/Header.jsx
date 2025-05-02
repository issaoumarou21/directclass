import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { BiSearchAlt2 } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";

function Header() {
    const [toggle,setToggle]=useState(false)
  return (
    <div className='flex items-center p-3'>
        <img src={logo} width={60} height={60} />
        <div className='flex bg-slate-200 p-2 w-full mx-4 rounded-full items-center'>
            <BiSearchAlt2/>
            <input type="text" placeholder='Search Articles' className='bg-transparent outline-none w-100 mx-3' name="" id="" />
            
        </div>
        <div>
            {toggle ? 
                <FaMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>setToggle(!toggle)} /> :
                <LuSunMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>setToggle(!toggle)} /> 
            }
        </div>
    </div>
  )
}

export default Header