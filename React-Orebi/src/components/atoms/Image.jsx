import React from "react";

const Image = ({ imgSrc, className, imgAlt }) => {
    return (
        <>
            <img src={imgSrc} alt={imgAlt} className={className} />
        </>
    );
};

export default Image;
