import React, { Children } from "react";
import "./sectionHaeding.css";
import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";

const SectionHeading = ({
    heading,
    para,
    tag,
    style,
    paraStyle,
    headingStyle,
}) => {
    return (
        <div className={style}>
            <Paragraph text={para} style={paraStyle} />
            <Heading as={tag} style={headingStyle}>
                {heading}
            </Heading>
        </div>
    );
};

export default SectionHeading;
