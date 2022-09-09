import React from 'react';
import {FaBars} from 'react-icons/fa';
import '../../App.css'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <>
    
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Casa da Criança com Câncer
                </NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="donate">Contribua</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about">Nossa missão</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contato</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Contribua
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar