import React from "react";
import PropTypes from "prop-types";
import TitleStyles from "./Title.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  isCrossOut: PropTypes.bool,
  titleColor: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7])
};

const defaultProps = {
  children: null,
  isCrossOut: false,
  level: 1
};

function Title(props) {
  return <TitleStyles {...props}>{props.children}</TitleStyles>;
}

Title.displayName = "Title";
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
