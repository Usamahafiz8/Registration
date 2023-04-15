import React from "react";
import { useNavigate } from "react-router";
import { UHeading2 } from "../uComponents/Uheading";
import { UButtonOutlines } from "../uComponents/Ubutton";
import { Button } from "@mui/material";

export default function Heaading() {

    const navigate = useNavigate()
    return (
        <div >
        <div style={{ width: '100%',  display: "flex", alignItems: "center", justifyContent: "space-around", }}>
            <div>logo</div>
            <div style={{ display: "flex", gap: "20px" }}>
                <Button onClick={() => { navigate("/") }}
                    style={{ fontWeight: "600" }}>
                    Home
                </Button><Button onClick={() => { navigate("/") }}
                    style={{ fontWeight: "600" }}>
                    About us
                </Button><Button onClick={() => { navigate("/") }}
                    style={{ fontWeight: "600" }}>
                    Pricing
                </Button><Button onClick={() => { navigate("/") }}
                    style={{ fontWeight: "600" }}>
                    Contact us
                </Button>
            </div>
            <div>
                <Button
                    variant="outlined" onClick={() => { navigate("/login") }}
                    style={{ fontWeight: "600" }}>
                    Login / Register
                </Button>
            </div>
        </div>
        </div>
    )
}