import React from "react";
import SectionHeading from "../../molecules/sectionHeading/SectionHeading";
import Heading from "../../atoms/heading/Heading";
import Paragraph from "../../atoms/paragraph/Paragraph";
import AboutInfo from "../../molecules/aboutInfo/AboutInfo";

const AboutMe = () => {
    return (
        <>
            <div className="container">
                <SectionHeading
                    tag="h2"
                    heading="Know Me More"
                    para="About Me"
                    style="text-center p_104"
                    paraStyle="section_top_para"
                    headingStyle="section_top_heading"
                />

                <div className="d-flex">
                    <div className="w-66">
                        <Heading as="h3" style="heading_name">
                            Hi, I&apos;m Callum Smith
                        </Heading>

                        <Paragraph
                            text="I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto."
                            style="about_text"
                        />
                    </div>
                    <div className="w-33 text-center">
                        <Heading as="h2" style="heading_number">
                            22
                        </Heading>
                        <Heading as="h6" style="heading_experience">
                            Years of Experiance
                        </Heading>
                    </div>
                </div>

                <div className="d-flex mt_50">
                    <div className="w-25">
                        <AboutInfo
                            tag="h6"
                            heading="Callum Smith"
                            para="Name:"
                            paraStyle="text-muted font_500"
                            headingStyle="font-18 font_600"
                        />
                    </div>

                    <div className="w-25">
                        <AboutInfo
                            tag="h6"
                            heading="chat@callum.com"
                            para="Email:"
                            paraStyle="text-muted font_500"
                            headingStyle="font-18 font_600"
                        />
                    </div>

                    <div className="w-25">
                        <AboutInfo
                            tag="h6"
                            heading="Callum Smith"
                            para="Name:"
                            paraStyle="text-muted font_500"
                            headingStyle="font-18 font_600"
                        />
                    </div>

                    <div className="w-25">
                        <AboutInfo
                            tag="h6"
                            heading="Callum Smith"
                            para="Name:"
                            paraStyle="text-muted font_500"
                            headingStyle="font-18 font_600"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
