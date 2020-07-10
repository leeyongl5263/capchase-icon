import React from "react";
import PropTypes from "prop-types";
import ContainerWithStyle, { PBWithStyle, ProgressValWithStyle } from "./ProgressBar.styles"

const propTypes = {
    /** The type of progressbar. fraction or percentage*/
    kind: PropTypes.string,

    barColor: PropTypes.string,
    fontColor: PropTypes.string,

    /** Percentage for kind = percentage */
    percentage: PropTypes.string,

    /** For kind = fraction */
    denominator: PropTypes.number,
    numerator: PropTypes.number

};

const defaultProps = {
    kind: "percentage",
    barColor: "#6347FF",
    fontColor: "#8D8D8D",
    percentage: "60%"
};

function ProgressBar(props) {
    let number, width;
    if (props.kind == "percentage") {
        number = props.percentage;
        width = props.percentage;
    } else {
        number = `${props.numerator}/${props.denominator}`;
        width = props.denominator <= 0 ? "0%" : (Math.round(props.numerator / props.denominator * 10000) / 100.00) + "%";
    }
    return (
        <ContainerWithStyle>
            <PBWithStyle width={width} barColor={props.barColor}>
                <ProgressValWithStyle fontColor={props.fontColor}>
                    {number}
                </ProgressValWithStyle>
            </PBWithStyle>
        </ContainerWithStyle>
    );
}

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
