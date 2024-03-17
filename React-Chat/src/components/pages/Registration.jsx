import React from "react";
import Grid from "@mui/material/Grid";
import Image from "../atoms/Image";
import registrationPic from "../../assets/registrationPic.png";

const Registration = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <p>6</p>
                </Grid>
                <Grid item xs={6}>
                    <Image src={registrationPic} alt="ok"/>
                </Grid>
            </Grid>
        </>
    );
};

export default Registration;
