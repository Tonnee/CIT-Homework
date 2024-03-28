import React from "react";

const ListItem = ({ className, children, text }) => {
    return (
        <>
            <li className={className}>
                {text}
                {children}
            </li>
        </>
    );
};

export default ListItem;
