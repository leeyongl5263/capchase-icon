import React from "react";

const Graph = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.63" height="21.63" viewBox="0 0 21.63 21.63" {...props}>
        <path id="icon_graph" d="M22.227,3H5.4A2.41,2.41,0,0,0,3,5.4V22.227a2.41,2.41,0,0,0,2.4,2.4H22.227a2.41,2.41,0,0,0,2.4-2.4V5.4A2.41,2.41,0,0,0,22.227,3ZM10.21,19.824h-2.4V11.412h2.4Zm4.807,0h-2.4V7.807h2.4Zm4.807,0h-2.4V15.017h2.4Z" transform="translate(-3 -3)" fill={props.color} />
    </svg >
);

export default Graph;
