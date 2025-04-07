import React, { useRef, useEffect, useState } from 'react'
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../images/logo.png'
import NavbarSearchHook from './../../hook/search/navbar-search-hook';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUser } from './../../redux/actions/authAction';
import GetAllUserCartHook from './../../hook/cart/get-all-user-cart-hook';

const NavBarLogin = () => {
    const [OnChangeSearch, searchWord] = NavbarSearchHook()
    let word = "";
    if (localStorage.getItem("searchWord") != null)
        word = localStorage.getItem("searchWord")

    const [user, setUser] = useState('');
    useEffect(() => {
        if (localStorage.getItem("user") != null)
            setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    const logOut = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser('')
    }

    const [itemsNum] = GetAllUserCartHook()

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
    
      const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
      };

    return (
        <Navbar className="sticky-top w-full navbar-custom" style={{ backgroundColor: '#efc4c3' }} variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='w-16 h-16' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={word}
                        onChange={OnChangeSearch}
                        type="search"
                        placeholder="Search..."
                        className="m-2 w-auto"
                        aria-label="Search"
                        style={{
                            fontSize: '14px',
                            borderRadius: '30px',
                            border: '1px solid #b0787b',
                            padding: '0.5rem 1rem',
                            maxWidth: '100%',
                            backgroundColor: '#f9f6f6',
                            color: '#b0787b',
                            height: '30px',
                        }}
                    />
                    <Nav className="ms-auto d-flex" ref={dropdownRef}>
                        {
                            user != '' ? (
                                <NavDropdown
                                    show={showDropdown}
                                    onClick={toggleDropdown}
                                    title={user.name}
                                    id="basic-nav-dropdown"
                                    className="nav-text d-flex w-100 justify-content-center"
                                >
                                    {
                                        user.role === "admin" ? (<NavDropdown.Item href="/admin/allproducts" className="nav-text">Dashboard</NavDropdown.Item>) : (<NavDropdown.Item href="/user/profile" className="nav-text">Profile</NavDropdown.Item>)
                                    }
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logOut} href="/" className="nav-text">Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) :
                                (<Nav.Link href='/login'
                                    className="nav-text d-flex mt-3 justify-content-center">
                                    <svg width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="me-2" fill="#f9f6f6">
                                        <path d="M0 0h48v48H0z" fill="none" />
                                        <g id="Shopicon">
                                            <path d="M31.278,25.525C34.144,23.332,36,19.887,36,16c0-6.627-5.373-12-12-12c-6.627,0-12,5.373-12,12
                                                c0,3.887,1.856,7.332,4.722,9.525C9.84,28.531,5,35.665,5,44h38C43,35.665,38.16,28.531,31.278,25.525z M16,16c0-4.411,3.589-8,8-8
                                                s8,3.589,8,8c0,4.411-3.589,8-8,8S16,20.411,16,16z M24,28c6.977,0,12.856,5.107,14.525,12H9.475C11.144,33.107,17.023,28,24,28z"
                                                stroke="#f9f6f6"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            />
                                        </g>
                                    </svg>
                                    <p className="nav-text">Login</p>
                                </Nav.Link>)
                        }

                        <Nav.Link href='/cart'
                            className="nav-text mt-3 d-flex justify-content-center">
                            <div className="position-relative">
                                <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                                    <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#f9f6f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span style={{ color: '#b0787b' }} className="position-absolute bottom-7 right-3 translate-middle badge rounded-pill bg-white">
                                    {itemsNum || 0}
                                </span></div>
                            <p className="nav-text">Cart</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin
