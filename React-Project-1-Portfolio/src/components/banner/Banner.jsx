import React from "react";
import introbg from "../../assets/intro-bg.jpg";
import "./banner.css";

const Banner = () => {
    return (
        <>
            <div className="banner_main">
                <img src={introbg} alt="intro-bg.jpg" />
            </div>
        </>
    );
};

export default Banner;
