import { Button } from "@mui/material";
import React from "react";

type THeadingProps = {
    children?: React.ReactNode
    styles?: { [style: string]: string | number }

}


const UButtonOutlines = ({ children, styles }: THeadingProps) => <Button
    variant="outlined"
    style={{
        // fontWeight: 700,

        ...styles
    }}>
    {children}
</Button>
const UButtonContained = ({ children, styles }: THeadingProps) => <Button
    variant="contained"
    style={{
        ...styles
    }}>
    {children}
</Button>
const UButtonText = ({ children, styles }: THeadingProps) => <Button
    variant="text"
    style={{
        ...styles
    }}>
    {children}
</Button>


export { UButtonOutlines, UButtonText, UButtonContained }