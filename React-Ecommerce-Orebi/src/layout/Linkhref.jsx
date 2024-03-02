import React from "react";

const Linkhref = ({ to, text, className }) => {
    return (
        <>
            <a href={to} className={className}>
                {text}
            </a>
        </>
    );
};

export default Linkhref;
