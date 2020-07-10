import React from 'react';
import PropTypes from "prop-types";
import ListWithStyle from "./ProfileButtonList.styles";

const ListTypes = {
    /** The width of every column. */
    columnWidth: PropTypes.string,

    /** The amount of the children. */
    amount: PropTypes.number,

    /** Body content of the list. */
    children: PropTypes.node
};

const ListDefaultProps = {
    columnWidth: "30px",
    amount: 3,
    children: null
};

const ProfileButtonList = React.forwardRef((props, ref) => {
    return (
        <ListWithStyle {...props} ref={ref} >
            {props.children}
        </ListWithStyle>);
});

ProfileButtonList.propTypes = ListTypes;
ProfileButtonList.defaultProps = ListDefaultProps;

export default ProfileButtonList;