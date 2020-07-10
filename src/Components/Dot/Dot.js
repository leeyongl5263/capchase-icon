import React from "react";
import PropTypes from "prop-types";
import DotWithStyle from "./Dot.styles";
import tokens from "../Util/Token";

const propTypes = {
    horizontalDirection: PropTypes.oneOf(["right", "left"]),
    horizontalDistance: PropTypes.number,
    verticalDirection: PropTypes.oneOf(["top", "bottom"]),
    verticalDistance: PropTypes.number,
    dotColor: PropTypes.string,
    dotBorder: PropTypes.bool,
    content: PropTypes.string,
    size: PropTypes.string
};


const defaultProps = {
    horizontalDirection: "right",
    horizontalDistance: -4,
    verticalDirection: "top",
    verticalDistance: -2,
    dotColor: tokens.statusColor.online,
    dotBorder: true,
    content: "",
    size: tokens.dot.dotSize
};


function Dot(props) {
    return (
        <DotWithStyle {...props} >
            {props.children}
        </DotWithStyle>
    );
}


Dot.displayName = "Dot";
Dot.propTypes = propTypes;
Dot.defaultProps = defaultProps;

export default Dot;