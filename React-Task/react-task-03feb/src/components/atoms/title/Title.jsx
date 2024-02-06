import React from "react";
import "./title.css";

const Title = (props) => {
    return props.as ? (
        <h6 className={props.style}>{props.text}</h6>
    ) : (
        <h6>Title Not Available</h6>
    );
};

export default Title;
