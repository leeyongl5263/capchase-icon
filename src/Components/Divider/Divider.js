import React from "react";
import PropTypes from "prop-types";
import DividerStyles from "./Divider.styles";

const propTypes ={
    isFullWidth: PropTypes.bool,
    dividerColor: PropTypes.string,
    width:PropTypes.string
};


const defaultProps = {
    width: "80%",
    isFullWidth: false
};


function Divider(props) {
    const { isFullWidth, dividerColor, width, ...moreProps} = props
    const styleProps = {
        dividerColor,
        width
    }
  return (
    <DividerStyles isFullWidth={isFullWidth} {...styleProps} {...props} />
  );
}


Divider.displayName = "Divider";
Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;