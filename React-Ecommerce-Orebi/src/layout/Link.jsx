import React from "react";

const Link = ({ to, text, className }) => {
    return (
        <>
            <a href={to} className={className}>
                {text}
            </a>
        </>
    );
};

export default Link;
