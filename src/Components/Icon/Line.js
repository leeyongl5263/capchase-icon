import React from "react";

const Line = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1" height="38" viewBox="0 0 1 38" {...props}>
        <line id="line" data-name="Line 66" y1="38" transform="translate(0.5)" fill={props.color} stroke="#e0e1e1" strokeWidth="1" />
    </svg>
);

export default Line;
