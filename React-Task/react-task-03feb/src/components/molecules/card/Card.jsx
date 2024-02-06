import React from "react";
import Title from "../../atoms/title/Title";
import Description from "../../atoms/description/Description";
import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";
import Image1 from "../../../assets/1.png";
import "./card.css";

const Card = () => {
    return (
        <>
            <div className="w-30">
                <Image link={Image1} style="card_img" />
                <Title
                    as="h2"
                    text="Cats have a total of 18 toes."
                    style="card_heading"
                />
                <Description style="card_description" />
                <Button text="Learn More" style="card_btn" />
            </div>
        </>
    );
};

export default Card;