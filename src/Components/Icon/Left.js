import React from "react";

function Left(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={props.width ? props.width : "24"}
            height={props.height ? props.height : "24"}
            viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                fill={props.color} />
            <path d="M0 0h24v24H0z"
                fill="none" />
        </svg>
    );
}
export default Left;