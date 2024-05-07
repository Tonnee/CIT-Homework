import React from "react";

const Heading = (props) => {
    return props.as ? (
        <props.as className={props.className}>{props.text}</props.as>
    ) : (
        <h6 className={props.className}>{props.text}</h6>
    );
};

export default Heading;
