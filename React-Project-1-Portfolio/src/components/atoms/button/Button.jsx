import React from "react";
import "./button.css";

const Button = ({ text, design }) => {
    return (
        <>
            <a href="#" className={design}>
                {text}
            </a>
        </>
    );
};

export default Button;
