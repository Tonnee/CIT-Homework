import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "../atoms/Image";
import registrationImage from "../../assets/registration.png";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Alert from "@mui/material/Alert";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
        setRegError({ ...regError, [e.target.name]: "" });
    };

    let [openEye, setOpenEye] = useState(true);

    let handleSubmit = () => {
        let pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regData.email) {
            setRegError({ ...regError, email: "Email Required" });
        } else if (!pattern.test(regData.email)) {
            setRegError({ ...regError, email: "Valid Email Required" });
        } else if (!regData.name) {
            setRegError({ ...regError, name: "Name Required" });
        } else if (!regData.password) {
            setRegError({ ...regError, password: "password Required" });
        } else if (regData.password.length < 6) {
            setRegError({
                ...regError,
                password: "password length 6 required",
            });
        } else {
            const auth = getAuth();
            createUserWithEmailAndPassword(
                auth,
                regData.email,
                regData.password
            )
                .then((userCredential) => {
                    console.log("user created", userCredential);
                })
                .catch((error) => {
                    console.log(error);
                });
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

                            {regError.name && (
                                <Alert severity="error">{regError.name}</Alert>
                            )}

                            <div className="passwordEye">
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Password"
                                    type={openEye ? "password" : "text"}
                                    name="password"
                                    onChange={handleChange}
                                />

                                {!openEye && (
                                    <FaRegEye
                                        onClick={() => setOpenEye(!openEye)}
                                        className="eye"
                                    />
                                )}

                                {openEye && (
                                    <FaRegEyeSlash
                                        onClick={() => setOpenEye(!openEye)}
                                        className="eye"
                                    />
                                )}
                            </div>

                            {regError.password && (
                                <Alert severity="error">
                                    {regError.password}
                                </Alert>
                            )}

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
