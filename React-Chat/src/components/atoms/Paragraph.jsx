import React from "react";

const Paragraph = ({ text, className, children }) => {
    return (
        <>
            <p className={className}>{text} { children}</p>
        </>
    );
};

export default Paragraph;
