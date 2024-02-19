import React from 'react';
import './Navbar.css';
import { GiWhiteBook } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store';

function Navbar() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    
    const dispatch = useDispatch();
    const logout = () => {
        sessionStorage.clear("id");
        dispatch(authActions.logout());
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg"
            >
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <b>
                        <GiWhiteBook />&nbsp; ZenTask
                        </b>
                        </Link>
                        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/todo">To-Do</Link>
                            </li>

                            {!isLoggedIn && <>
                                <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/signup">Sign-Up</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/signin">Sign-In</Link>
                            </li>
                            </>}
                            
                            {isLoggedIn && <>
                                <li className="nav-item mx-2"  onClick={logout}>
                                <Link className="nav-link active btn-nav" aria-current="page" to="#">Log Out</Link>
                            </li></>
                            }
                            
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/userProfile">
                                    <img 
                                    className='img-fluid user-png'
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuxc9c2QTj2mFfNPLKI3W72OrTgdDVA1u2EeYV9KCQw&s'/>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}
<Link rel='stylesheet' to='Navbar.css'/>
export default Navbar