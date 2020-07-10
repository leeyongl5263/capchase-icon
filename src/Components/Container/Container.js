import React from "react";
import PropTypes from "prop-types";
import ContainerStyles from "./Container.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  containerColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  isAlertOn: PropTypes.bool,
  borderTopColor: PropTypes.string
};

const defaultProps = {
  boxColor: "#ffffff",
  height: "440px",
  width: "400px",
  isAlertOn: false,
  borderTopColor: "#FF9A21"
};

function Container(props) {
  return (
    <ContainerStyles {...props}>
      {props.children}
    </ContainerStyles>
  );
}

Container.displayName = "Container";
Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
