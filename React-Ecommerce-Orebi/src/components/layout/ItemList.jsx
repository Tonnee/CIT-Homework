import React from "react";

const ItemList = ({ className, children, text }) => {
    return (
        <>
            <li className={className}>{text}{children}</li>
        </>
    );
};

export default ItemList;
