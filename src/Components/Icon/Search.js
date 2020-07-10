import React from "react";

const IconSearch = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
        {...props}
    >
        <path id="icon_search" d="M268,140a8,8,0,1,0,8,8A8,8,0,0,0,268,140Zm0,14a6,6,0,1,1,6-6A6.007,6.007,0,0,1,268,154Zm12,4.586L278.586,160l-4.243-4.243,1.414-1.414Z" transform="translate(-260 -140)" fill={props.color}/>
    </svg >
);

export default IconSearch;
