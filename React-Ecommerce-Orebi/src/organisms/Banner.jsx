import React from "react";
import Image from "../layout/Image";
import BannerImage1 from "../assets/banner-slider-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "../layout/Linkhref";
import Container from "../layout/Container";

const Banner = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div>
                <ul
                    style={{
                        width: "22px",
                        position: "absolute",
                        top: "50%",
                        left: "8%",
                    }}
                >
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    fontSize: "10px",
                    color: "blue",
                    borderRight: "3px solid #262626",
                }}
            >
                {i + 1}
            </div>
        ),
    };
    return (
        <>
            <Slider {...settings}>
                <a href="#">
                    <Image imgSrc={BannerImage1} className="block w-full" />
                </a>
                <a href="#">
                    <Image imgSrc={BannerImage1} className="block w-full" />
                </a>
                <a href="#">
                    <Image imgSrc={BannerImage1} className="block w-full" />
                </a>
            </Slider>
        </>
    );
};

export default Banner;
