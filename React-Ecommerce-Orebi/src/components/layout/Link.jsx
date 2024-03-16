import React from "react";

const Link = (linkRef, className, text, target, children) => {
    return (
        <>
            <a href={linkRef} className={className} target={target}>
                {text}
                {children}
            </a>
        </>
    );
};

export default Link;
