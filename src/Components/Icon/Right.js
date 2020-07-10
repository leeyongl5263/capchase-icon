import React from "react";
function Right(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={props.width ? props.width : "24"}
            height={props.height ? props.height : "24"}
            viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                fill={props.color} />
            <path d="M0 0h24v24H0z"
                fill="none" />
        </svg>
    );
}
export default Right;