import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "../atoms/Image";
import registrationPic from "../../assets/registrationPic.png";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Oval } from "react-loader-spinner";
import Link from "../atoms/Link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const auth = getAuth();
    let navigate = useNavigate();

    let [regData, setRegData] = useState({
        email: "",
        fullName: "",
        password: "",
    });

    let [regError, setRegError] = useState({
        email: "",
        fullName: "",
        password: "",
    });

    let handleChange = (e) => {
        setRegData({ ...regData, [e.target.name]: e.target.value });
    };

    let [openEye, setOpenEye] = useState(true);

    let [loading, setLoading] = useState(false);

    let handleSubmit = () => {
        let pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regData.email) {
            setRegError({ ...regError, email: "Email required" });
        } else if (!pattern.test(regData.email)) {
            setRegError({ ...regError, email: "Invalid email" });
        } else if (!regData.fullName) {
            setRegError({ ...regError, fullName: "Name required" });
        } else if (!regData.password) {
            setRegError({ ...regError, password: "Password required" });
        } else if (regData.password.length < 6) {
            setRegError({ ...regError, password: "Password is too small" });
        } else {
            setLoading(true);
            createUserWithEmailAndPassword(
                auth,
                regData.email,
                regData.password
            )
                .then((userCredential) => {
                    setLoading(false);
                    sendEmailVerification(auth.currentUser).then(() => {
                        toast.success(
                            "Registration Successful! Check your email for verification.",
                            {
                                position: "bottom-center",
                                autoClose: 2000,
                            }
                        );
                    });

                    setRegData({ email: "", fullName: "", password: "" });

                    navigate("/login");

                    // console.log("user created", userCredential);
                })
                .catch((error) => {
                    setLoading(false);
                    const errorMessage = error.message;
                    console.log("Error:", errorMessage);
                });
        }
    };
    return (
        <>
            <Grid container>
                <ToastContainer />
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

                        <div className="inputBox">
                            <TextField
                                onChange={handleChange}
                                name="email"
                                id="outlined-number"
                                label="Email Address"
                                type="email"
                                value={regData.email}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {regError.email && (
                                <Alert severity="error" className="regError">
                                    {regError.email}
                                </Alert>
                            )}
                        </div>

                        <div className="inputBox">
                            <TextField
                                onChange={handleChange}
                                name="fullName"
                                id="outlined-number"
                                label="Full Name"
                                type="text"
                                value={regData.fullName}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            {regError.fullName && (
                                <Alert severity="error" className="regError">
                                    {regError.fullName}
                                </Alert>
                            )}
                        </div>

                        <div className="inputBox inputPassword">
                            <TextField
                                onChange={handleChange}
                                name="password"
                                id="outlined-number"
                                label="Password"
                                value={regData.password}
                                type={openEye ? "password" : "text"}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {openEye && (
                                <FaRegEye
                                    onClick={() => setOpenEye(!openEye)}
                                    className="eye"
                                />
                            )}
                            {!openEye && (
                                <FaRegEyeSlash
                                    onClick={() => setOpenEye(!openEye)}
                                    className="eye"
                                />
                            )}

                            {regError.password && (
                                <Alert severity="error" className="regError">
                                    {regError.password}
                                </Alert>
                            )}
                        </div>

                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            className="signUpBtn"
                            disabled={loading}
                        >
                            {loading && (
                                <Oval
                                    visible={true}
                                    height="40"
                                    width="40"
                                    color="#ffffff"
                                    ariaLabel="oval-loading"
                                    wrapperClass="oval"
                                />
                            )}
                            Sign Up
                        </Button>

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
