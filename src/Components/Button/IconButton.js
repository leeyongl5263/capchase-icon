import React from 'react';
import PropTypes from "prop-types";
import IconButtonWithStyle from "./IconButton.styles";

const IconPropTypes = {
    children: PropTypes.node,
    withBorder: PropTypes.bool
};

const IconDefaultProps = {
    children: null,
    withBorder: false
};

const IconButton = React.forwardRef((props, ref) => {
    return (
        <IconButtonWithStyle {...props} ref={ref} >
            {props.children}
        </IconButtonWithStyle>);
});

IconButton.propTypes = IconPropTypes;
IconButton.defaultProps = IconDefaultProps;

export default IconButton;