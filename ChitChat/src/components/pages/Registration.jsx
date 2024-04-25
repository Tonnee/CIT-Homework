import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "./atoms/Image";
import BannerImage from "../../assets/banner-image.png";

const Registration = () => {
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid xs={6}>
                
            </Grid>
            <Grid xs={6}>
                <Image imgSrc={BannerImage}/>
            </Grid>
        </Grid>
    );
};

export default Registration;
