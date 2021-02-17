import React from 'react'
import NavbarStyled from "./Navbar.styled";
import { useGlobalContext } from './../../context'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom;
        openSubmenu(page, { center, bottom })
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu()
        }
    }
    return (
        <div className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <p> navlogo</p>
                    <button className="btn toggle-btn" onClick={openSidebar}><FaBars /></button>
                </div>
                <ul className="nav-links">
                    <li><button className='link-btn__single '>Startseite</button></li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            Inspirationen
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            Regionen
                        </button>
                    </li>

                </ul>
                <button className='btn sign-in'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar