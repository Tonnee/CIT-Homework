import React from "react";

const ItemList = ({ text, style, link }) => {
    return (
        <>
            <li className={style}>
                <a href={link}>{text}</a>
            </li>
        </>
    );
};

export default ItemList;
