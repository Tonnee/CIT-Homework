import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Image from "../atoms/Image";
import registrationImage from "../../assets/registration.png";
import Heading from "../atoms/Heading";

const Registration = () => {
    return (
        <>
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={6}
                >
                    <Heading as="h1" />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email Address"
                        defaultValue="Ladushing691@gmail.com"
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <Image
                        imgSrc={registrationImage}
                        imgAlt="registration"
                        className="registration-image"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Registration;
