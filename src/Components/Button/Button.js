import React from 'react';
import PropTypes from "prop-types";
import ButtonWithStyle from "./Button.styles";

const Kinds = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DESTRUCTIVE: "destructive",
  ACCENT: "accent",
  NOSTYLE: "nostyle"
};

const ButtonSizes = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  LONG: "long",
  XTRALONG: "xtralong"
};

const propTypes = {
  children: PropTypes.node,
  kind: PropTypes.oneOf(Object.values(Kinds)),
  size: PropTypes.oneOf(Object.values(ButtonSizes))
};

const defaultProps = {
  children: null,
  kind: Kinds.DEFAULT,
  size: ButtonSizes.MEDIUM
};

const Button = React.forwardRef((props, ref) => {
  
  return (
    <ButtonWithStyle ref={ref} {...props} >
      {props.children}
    </ButtonWithStyle>
  );
});

Button.Kinds = Kinds;
Button.displayName = "Button";
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;


