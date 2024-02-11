import React from "react";
import "./nav.css";
import logoLight from "../../../assets/logo-light.png";
import { IoMdCall } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="d-flex justify-between items-center">
                        <div className="nav-logo">
                            <img src={logoLight} alt="logo" />
                        </div>

                        <div className="nav-right text-white d-flex items-center">
                            <IoMdCall className="call-icon" />
                            <p className="font-18 font-semi">
                                (060) 444 434 444
                            </p>
                            <RxHamburgerMenu className="menu-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
