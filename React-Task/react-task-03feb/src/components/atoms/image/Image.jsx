import React from "react";
import "./image.css";

const Image = ({ link, altText, style }) => {
    return (
        <>
            <img src={link} alt={altText} className={style} />
        </>
    );
};

export default Image;
