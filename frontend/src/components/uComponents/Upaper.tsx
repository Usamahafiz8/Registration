import React from "react";

type TPaperProps = {
    children?: React.ReactNode
    styles?: { [style: string]: string | number }

}
const UPaper = ({ children, styles }: TPaperProps) =>
    // 0.063em
    <div style={{
        border: "2px solid #EC5C2A",
        borderRadius: '8px',
        background: "#fffff",
    }}>
        <div style={{
            height: "fit-content",
            background: "#fffff",
            // padding: "1.5em",
            borderRadius: 8,
            ...styles

        }}
        >
            {children}
        </div>
    </div>
export { UPaper }