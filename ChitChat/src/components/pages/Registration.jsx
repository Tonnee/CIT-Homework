import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "../atoms/Image";
import registrationImage from "../../assets/registration.png";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

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
                    <div className="reg-div">
                        <Heading
                            as="h1"
                            text="Get started with easily register"
                        />
                        <Paragraph text="Free register and you can enjoy it" />

                        <div className="input-div">
                            <TextField
                                required
                                id="outlined-required"
                                label="Email Address"
                                type="email"
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Full name"
                                type="text"
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                type="password"
                            />

                            <Button variant="contained">Sign Up</Button>
                        </div>
                    </div>
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
