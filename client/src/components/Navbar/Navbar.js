import React from 'react'
import NavbarStyled from "./Navbar.styled";
import { useGlobalContext } from './../../context'

import { FaBars } from 'react-icons/fa'
const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
    return (
        <NavbarStyled className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <p> navlogo</p>
                    <button className="btn toggle-btn" onClick={openSidebar}><FaBars /></button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button className='link-btn'>
                            products
                        </button>
                    </li>
                    <li>
                        <button className='link-btn'>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className='link-btn'>
                            company
                        </button>
                    </li>
                </ul>
                <button className='btn sign-in'>Sign In</button>
            </div>
        </NavbarStyled>
    )
}

export default Navbar