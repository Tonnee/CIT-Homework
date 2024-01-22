import React from "react";
import logoLight from "../assets/logo-light.png";

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="d-flex justify-between">
                        <div>
                            <img src={logoLight} alt="Logo light" />
                        </div>

                        <div>
                            <p className="text-white">(060) 444 434 444</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
