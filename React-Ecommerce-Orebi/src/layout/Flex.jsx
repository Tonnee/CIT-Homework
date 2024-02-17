import React from "react";

const Flex = ({ children, className }) => {
    const deafultClassName = `flex ${className}`;
    return (
        <>
            <div className={deafultClassName}>{children}</div>
        </>
    );
};

export default Flex;
