import React from "react";
import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";

const AboutInfo = ({ heading, para, tag, headingStyle, paraStyle }) => {
    return (
        <>
            <Paragraph style={paraStyle} text={para} />
            <Heading as={tag} style={headingStyle}>
                {heading}
            </Heading>
        </>
    );
};

export default AboutInfo;
