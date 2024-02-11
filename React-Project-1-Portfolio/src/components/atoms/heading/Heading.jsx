import React from "react";
import './heading.css'

const Heading = (props) => {
    return props.as ? (
        <props.as className={props.style}>{props.children}</props.as>
    ) : (
        <h6 className={props.style}>Title Not Available</h6>
    );
};

export default Heading;
