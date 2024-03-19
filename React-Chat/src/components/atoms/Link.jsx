import React from "react";

const Link = ({ linkRef, text, className }) => {
    return (
        <>
            <a href={linkRef} className={className}>
                {text}
            </a>
        </>
    );
};

export default Link;
