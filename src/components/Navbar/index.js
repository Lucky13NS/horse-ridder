import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavText,
    NavNum
} from './NavbarElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 250) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Hordes
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home"
                             smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Home
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                About
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="services" 
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Services
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="pages" 
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Pages
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="shop" 
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Shop
                            </NavLinks>
                        </NavItem> 

                        <NavItem>
                            <NavLinks to="blog" 
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Blog
                            </NavLinks>
                        </NavItem> 

                        <NavItem>
                            <NavLinks to="contact" 
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >
                                Contact
                            </NavLinks>
                        </NavItem> 
                    </NavMenu>

                    <NavText>
                        Call us:<br></br><br></br>00868468974 

                    </NavText>


                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    )
}

export default Navbar
