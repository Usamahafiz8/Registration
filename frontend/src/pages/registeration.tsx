import React from "react";
import Heaading from "../components/heading/heading";
import RegisterationForm from "../components/forms/signUp";

export default function Registration() {
    return (
        <div>
            <Heaading />
            <div style={{ marginTop: "96px", width: "100%" }}>
            <RegisterationForm/>
            </div>
        </div>
    )
}