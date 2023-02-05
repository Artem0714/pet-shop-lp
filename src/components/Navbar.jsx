import React from "react";
import mainLogo from "../UI/img/about.svg";
import '../UI/css/navbar.css';

export const Navbar = () => {
    return(
        <div className="navigator">
            <h1 className="logo">Pet-First</h1>

            <div className="navbar">
                <ul>
                    <li className="about">
                        <button>About</button>
                        <img src={mainLogo} alt="About" /> 
                    </li>
                    <li>
                        <button>Service</button>
                    </li>
                    <li>
                        <button>Madi-Care</button>
                    </li>
                    <li>
                        <button>Blog</button>
                    </li>
                </ul>
            </div>
            <div className="sign-up-box">
                <button className="sign-up-box-bt">Sign up</button>
            </div>
        </div>
    )
}