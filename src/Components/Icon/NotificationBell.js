import React from "react";

const NotificationBell = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" {...props}>
        <path
            id="notification-bell" d="M194,592v-4a5.688,5.688,0,0,0-5-5.921V580h-2v2.079A5.688,5.688,0,0,0,182,588v4a2,2,0,0,1-2,2v2h5v1a3,3,0,0,0,6,0v-1h5v-2A2,2,0,0,1,194,592Zm-5,5a1,1,0,0,1-2,0v-1h2Zm3-3s-6,1.5-8,0,0-6,0-6a3.843,3.843,0,0,1,4-4h0a3.843,3.843,0,0,1,4,4Z" transform="translate(-180 -580)"
            fill={props.color}
        />
    </svg>
);

export default NotificationBell;

