import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "../atoms/Image";
import registrationPic from "../../assets/registrationPic.png";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import TextField from "@mui/material/TextField";
import Button from "../atoms/Button";
import Link from "../atoms/Link";

const Registration = () => {
    let [regData, setRegData] = useState({
        email: "",
        fullName: "",
        password: "",
    });

    let handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setRegData({...regData, [e.target.name]: e.target.value})
    };

    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <div className="regiText">
                        <Title
                            as="h1"
                            className="fontNunito blue11 font34 mb13"
                            text="Get started with easily register"
                        />
                        <Paragraph
                            className="fontNunito"
                            text="Free register and you can enjoy it"
                        />

                        <TextField
                            onChange={handleChange}
                            name="email"
                            id="outlined-number"
                            label="Email Address"
                            type="email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            onChange={handleChange}
                            name="fullName"
                            id="outlined-number"
                            label="Full Name"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            onChange={handleChange}
                            name="password"
                            id="outlined-number"
                            label="Password"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Button text="Sign up" className="signUpBtn" />

                        <Paragraph
                            text="Already  have an account ? "
                            className="regiSignIn"
                        >
                            <Link
                                text="Sign in"
                                linkRef="#"
                                className="orangeText"
                            />
                        </Paragraph>
                    </div>
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
