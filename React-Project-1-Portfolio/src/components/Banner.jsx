import React from "react";
import Button from "./buttons/Button";

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="overlay">
                    <Button text="View My Works" design="yellow_btn" />
                </div>
            </div>
        </>
    );
};

export default Banner;
