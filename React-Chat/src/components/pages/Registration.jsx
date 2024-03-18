import React from "react";
import Grid from "@mui/material/Grid";
import Image from "../atoms/Image";
import registrationPic from "../../assets/registrationPic.png";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";

const Registration = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <Title
                        as="h1"
                        className=""
                        text="Get started with easily register"
                    />
                    <Paragraph text="Free register and you can enjoy it" />
                </Grid>
                <Grid item xs={6}>
                    <Image
                        src={registrationPic}
                        alt="image"
                        className="registrationPic"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Registration;
