import React from "react";
import PropTypes from "prop-types";
import LabelStyles from "./Label.styles";


const propTypes = {
  children: PropTypes.node.isRequired,
  isCrossOut: PropTypes.bool,
  labelColor: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7])
};

const defaultProps = {
    children: null,
    isCrossOut: false,
    level: 2
};

function Label(props) {
  return (
    <LabelStyles {...props}>
      {props.children}
    </LabelStyles>
  );
}


Label.displayName = "Label";
Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;











