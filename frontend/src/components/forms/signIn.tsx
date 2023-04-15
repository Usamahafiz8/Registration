import React from "react";
import { useNavigate } from "react-router";
import { UHeading1, UHeading2, UHeading4 } from "../uComponents/Uheading";
import { UButtonOutlines } from "../uComponents/Ubutton";
import { Button, Grid, TextField } from "@mui/material";

export default function SignIN() {

    const navigate = useNavigate()
    return (
        <Grid container
            style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}
                style={{
                    padding: '24px', gap: "16px",
                    minHeight: "400px", width: '100%', display: "flex",
                    // alignItems: "center", 
                    flexDirection: "column"
                }}
            >
                <UHeading1 styles={{ textAlign: "center" }}>
                    Welcome to Campus-Hive
                </UHeading1>
                <UHeading2 styles={{ fontSize: '16px' }}>
                    <div style={{ color: "#EC5C2A", textAlign: "center" }}>

                        Login in to your account and start working digitally.
                    </div>
                </UHeading2>
                <TextField label="Username/Email" variant="outlined" fullWidth />
                <TextField label="Password" variant="outlined" fullWidth />
                <UHeading2 styles={{ fontSize: '14px', color: "#EC5C2A" }}>
                    <div style={{ textAlign: "right", cursor:"pointer" }}>
                        Forget your password?
                    </div>
                </UHeading2>
                <Button variant="contained" fullWidth onClick={()=>{navigate('/dashboard')}}>
                    <UHeading2 styles={{ textAlign: "center" }}>
                        Login
                    </UHeading2>
                </Button>
                <div style={{ display: "flex", justifyContent: "center", gap: "12px", textAlign: "center" }}>
                    <UHeading2>
                        <div style={{ textAlign: "center", fontSize: "14px" }}>

                            Don't have an account?
                        </div>
                    </UHeading2>

                        <div style={{ textAlign: "center", cursor:"pointer" }} onClick={()=>{navigate('/register')}} >
                    <UHeading2 styles={{ color: "#EC5C2A", fontSize: "14px" }}>
                            {/* <a href="/registration" style={{textDecoration:'none', color:'#EC5C2A'}}> */}
                                Create an account?
                            {/* </a> */}
                    </UHeading2>
                        </div>
                </div>
            </Grid>
        </Grid>
    )
}