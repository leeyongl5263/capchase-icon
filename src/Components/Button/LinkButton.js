import React from "react";
import PropTypes from "prop-types";
import LinkButtonStyle from "./LinkButton.style";

const LinkPropTypes = {
    children: PropTypes.node.isRequired,
    hasUnderLine: PropTypes.bool
};

const LinkDefaultProps = {
    hasUnderLine: true
};

const LinkButton = React.forwardRef((props, ref) => {
    if (props.target == "_blank") {
        LinkButton.rel = "noopener noreferrer";
    }
    return (
        <LinkButtonStyle
            {...props}
            ref={ref}
        >
            {props.children}
        </LinkButtonStyle>
    );
});

LinkButton.displayName = "LinkButton";
LinkButton.propTypes = LinkPropTypes;
LinkButton.defaultProps = LinkDefaultProps;

export default LinkButton;
