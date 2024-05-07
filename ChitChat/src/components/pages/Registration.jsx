import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "../atoms/Image";
import registrationImage from "../../assets/registration.png";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Alert from "@mui/material/Alert";

const Registration = () => {
    let [regData, setRegData] = useState({
        email: "",
        name: "",
        password: "",
    });

    let [regError, setRegError] = useState({
        email: "",
        name: "",
        password: "",
    });

    let handleChange = (e) => {
        setRegData({ ...regData, [e.target.name]: e.target.value });
    };

    let handleSubmit = () => {
        if (!regData.email) {
            setRegError({ ...regError, email: "Email Required" });
        }
    };
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
                                name="email"
                                onChange={handleChange}
                            />

                            {regError.email && (
                                <Alert severity="error">{regError.email}</Alert>
                            )}

                            <TextField
                                required
                                id="outlined-required"
                                label="Full name"
                                type="text"
                                name="name"
                                onChange={handleChange}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                            />

                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
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
