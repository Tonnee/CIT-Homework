import React from "react";

const Link = ({ linkref, className, text, children }) => {
    return (
        <>
            <a href={linkref} className={className}>
                {children}
                {text}
            </a>
        </>
    );
};

export default Link;
