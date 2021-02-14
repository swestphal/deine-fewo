import React from 'react'
import NavbarStyled from "./Navbar.styled";

const Navbar = () => {
    return (
        <NavbarStyled>
            <ul>
                <li>Logo</li>
                <li>
                    <ul>
                        <li>Startseite</li>
                        <li>Ferien Unterkünfte</li>
                        <li>Inspirationen</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>Vermieter</li>
                        <li>Merkliste</li>
                    </ul>
                </li>
            </ul>
        </NavbarStyled>
    )
}

export default Navbar