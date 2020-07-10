import React from "react";
import PropTypes from "prop-types";
import DDLWithStyle, { DDLContainer } from "./DropDownList.styles";
import { Label } from "../Label";

const propTypes = {
    children: PropTypes.node,
    wholeWidth: PropTypes.string,
    backgroundColor: PropTypes.string,
    withIcon: PropTypes.bool,
    iconSrc: PropTypes.string,
    description: PropTypes.string,
    labelColor: PropTypes.string
};

const defaultProps = {
    wholeWidth: "180px",
    backgroundColor: "white",
    labelColor: "gray"
};

const DropDownList = React.forwardRef((props, ref) => {
    const { wholeWidth, backgroundColor, labelColor, description, children, iconSrc, withIcon } = props;
    const containerProps = { wholeWidth, backgroundColor };
    return (
        <DDLContainer {...containerProps}>
            {withIcon ? <img src={iconSrc} style={{ marginLeft: "5px" }} /> : null}
            {description ? <Label labelColor={labelColor} style={{ marginLeft: "10px", fontSize: "16px" }}>{description}</Label> : null}
            {/* {description ? <label style={{ marginLeft: "10px", fontSize: "16px", color: labelColor }}>{description}</label> : null} */}
            <DDLWithStyle ref={ref} {...props}>
                {children}
            </DDLWithStyle>
        </DDLContainer>);
});

DropDownList.displayName = "DropDownList";
DropDownList.propTypes = propTypes;
DropDownList.defaultProps = defaultProps;

export default DropDownList;
