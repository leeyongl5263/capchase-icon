import React from "react";

const RingBell = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22.105" height="24.405" viewBox="0 0 22.105 24.405"{...props}>
        <path id="ring-bell" d="M14,12V8A5.688,5.688,0,0,0,9,2.079V0H7V2.079A5.688,5.688,0,0,0,2,8v4a2,2,0,0,1-2,2v2H5v1a3,3,0,0,0,6,0V16h5V14A2,2,0,0,1,14,12ZM9,17a1,1,0,0,1-2,0V16H9Zm3-3H4V8A3.843,3.843,0,0,1,8,4H8a3.843,3.843,0,0,1,4,4Z" transform="translate(7.167) rotate(21)"  fill={props.color} />
    </svg >
);

export default RingBell;

