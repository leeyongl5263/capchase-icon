import React from "react";
import PropTypes from "prop-types";
import DDMItemWithStyle from "./DropDownMenuItem.styles";

const propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    onClose: PropTypes.func
};

const defaultProps = {
    onClick: () => { },
};

const DropDownMenuItem = (props) => {
    const { children, onClick, onClose, ...moreProps } = props;
    const handleClickItem = (e) => {
        onClick();
        onClose(e);
    };
    const itemProps = {
        onClick: handleClickItem
    };
    return (
        <DDMItemWithStyle {...itemProps} {...moreProps}>
            {children}
        </DDMItemWithStyle>);
};

DropDownMenuItem.displayName = "DropDownMenuItem";
DropDownMenuItem.propTypes = propTypes;
DropDownMenuItem.defaultProps = defaultProps;

export default DropDownMenuItem;