import React from "react";
import { useNavigate } from "react-router";
import { UHeading1, UHeading2, UHeading4 } from "../uComponents/Uheading";
import { UButtonOutlines } from "../uComponents/Ubutton";
import { Button, Grid, TextField } from "@mui/material";
import { UPaper } from "../uComponents/Upaper";

export default function LoginForm() {

    const navigate = useNavigate()
    return (
        <div style={{}}>
            <UPaper styles={{padding:'24px'}}>


                {/* <Grid container 
        style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}
        style={{ padding: '24px', gap: "16px", 
        minHeight: "400px", width: '100%', display: "flex", 
        // alignItems: "center", 
        flexDirection: "column" 
    }}
            > */}
                <UHeading1 styles={{ textAlign: "center" }}>
                    Welcome to Campus-Hive
                </UHeading1>
                <UHeading2 styles={{ fontSize: '16px' }}>
                    <div style={{ textAlign: "center" }}>

                        Login in to your account and start selling your products
                    </div>
                </UHeading2>
                <TextField label="Username/Email" variant="outlined" fullWidth />
                <TextField label="Password" variant="outlined" fullWidth />
                <UHeading2 styles={{ fontSize: '14px', color: "#EC5C2A" }}>
                    <div style={{ textAlign: "right" }}>
                        Forget your password?
                    </div>
                </UHeading2>
                <Button variant="contained" fullWidth>Login</Button>
                <div style={{ display: "flex", justifyContent: "center", gap: "12px", textAlign: "center" }}>
                    <UHeading2>
                        <div style={{ textAlign: "center", fontSize: "14px" }}>

                            Don't have an account?
                        </div>
                    </UHeading2>
                    <UHeading2 styles={{ color: "#EC5C2A", fontSize: "14px" }}>
                        <div style={{ textAlign: "center" }}>
                            Create an account?</div>
                    </UHeading2>
        </div>
            </UPaper>

        </div >
    )
}