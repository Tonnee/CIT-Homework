import React from "react";

const ItemList = ({ style, children }) => {
    return (
        <>
            <li className={style}>{children}</li>
        </>
    );
};

export default ItemList;
