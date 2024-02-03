import React from "react";

const Heading = (props) => {
    return props.as ? <h6>{props.text}</h6> : <h2>props.text</h2>;
};

export default Heading;
