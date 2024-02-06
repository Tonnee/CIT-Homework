import React from "react";

const Button = ({ text, style, url }) => {
    return (
        <>
            <a href={url} className={style}>
                {text}
            </a>
        </>
    );
};

export default Button;
