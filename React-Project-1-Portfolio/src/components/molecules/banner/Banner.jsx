import React from "react";
import introbg from "../../../assets/intro-bg.jpg";
import "./banner.css";
import Button from "../../atoms/button/Button";

const Banner = () => {
    return (
        <>
            <div className="banner_main">
                <div className="overlay"></div>
                <img src={introbg} alt="intro-bg.jpg" />
                <div className="banner-text font-pop text-white">
                    <h2>HI, I'M A FREELANCER</h2>
                    <h1>DEVELOPER</h1>
                    <h6>based in Los Angeles, USA.</h6>
                    <Button
                        text="View My Works"
                        design="btn-yellow"
                    ></Button>
                </div>
            </div>
        </>
    );
};

export default Banner;
