import React from "react";

const Anchor = ({ link, text, style }) => {
    return (
        <>
            <a href={link} className={style}>
                {text}
            </a>
        </>
    );
};

export default Anchor;
