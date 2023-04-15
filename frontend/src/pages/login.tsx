import React from "react";
import Heaading from "../components/heading/heading";
import Footer from "../components/footers";
import SignIN from "../components/forms/signIn";
import LoginForm from "../components/forms/login";
import { Grid } from "@mui/material";

export default function Login() {
    return (
        <div style={{ width: "100%" }}>
            <Heaading />
            <div style={{ marginTop: "96px", width: "100%" }}>
                <SignIN />
                {/* <hr />
                <Grid container style={{display:'flex', justifyContent:"center"}}>
                    <Grid item xl={4} lg={4} md={6} sm={10} xs={10}>

                        <LoginForm />
                    </Grid>
                </Grid> */}
            </div>
            {/* <Footer /> */}
        </div>
    )
}