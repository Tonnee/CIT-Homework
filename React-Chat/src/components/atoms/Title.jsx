import React from "react";

const Title = (props) => {
    return props.as ? (
        <h6 className={props.className}>{props.text}</h6>
    ) : (
        <h6>Title not available</h6>
    );
};

export default Title;
