import React from "react";
import PropTypes from "prop-types";
import TagWithStyle from "./Tag.styles";


const TagSizes = {
    XSMALL: "xsmall",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
}

const propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    tagColor: PropTypes.string,
    fontColor:PropTypes.string,
    size: PropTypes.oneOf(Object.values(TagSizes))
};

const defaultProps = {
    children: null,
    isDisabled: false,
    tagColor: "grey",
    size: "medium",
};

function Tag(props) {
    return (
        <TagWithStyle {...props}>
          {props.children}
        </TagWithStyle>
    );
}

Tag.displayName = "Tag";
Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
