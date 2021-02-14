import styled from "styled-components"
import Navbar from "./Navbar"

const NavbarStyled = styled.div`
    ul {
        list-style-type:none;
        display:flex;
        justify-content:space-between;
        ul {
            flex-direction:row
        }
        li {
            padding:.5em 1em;
        }
    }
  
  `


export default NavbarStyled