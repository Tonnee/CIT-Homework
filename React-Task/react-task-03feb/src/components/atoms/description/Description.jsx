import React from "react";
import "./description.css";

const Description = ({ style }) => {
    return (
        <>
            <p className={style}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti quaerat, laudantium aliquam, ipsum reiciendis
                necessitatibus eum explicabo optio accusamus cumque culpa
                excepturi minus inventore in sequi.
            </p>
        </>
    );
};

export default Description;
