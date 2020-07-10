import React from 'react';
import PropTypes from "prop-types";
import IconTagStyle from "./IconTagStyle.styles";

const IconTagSizes = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
}

const propTypes = {
    children: PropTypes.node.isRequired,
    iconTagColor: PropTypes.string,
    fontColor: PropTypes.string,
    size: PropTypes.oneOf(Object.values(IconTagSizes))
};

const defaultProps = {
    children: null,
    iconTagColor:"none",
    size: "medium",
};

function IconTag(props) {
    return (
        <IconTagStyle {...props}>
            {props.children}
        </IconTagStyle>
    );
}

IconTag.displayName = "IconTag";
IconTag.propTypes = propTypes;
IconTag.defaultProps = defaultProps;

export default IconTag;
