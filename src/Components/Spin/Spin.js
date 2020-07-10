import React from "react";
import PropTypes from "prop-types";
import { Icon } from '../Icon';
import SpinWithStyle from "./Spin.styles";

const propTypes = {
  containerColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  isAlertOn: PropTypes.bool,
  borderTopColor: PropTypes.string
};

const defaultProps = {
  boxColor: "#ffffff",
  height: "440px",
  width: "300px",
  isAlertOn: false,
  borderTopColor: "#FF9A21"
};
const Spin = React.forwardRef((props, ref) => {
  return (
    <SpinWithStyle {...props}>
        
    </SpinWithStyle>
  );
});

Spin.displayName = "Spin";
Spin.propTypes = propTypes;
Spin.defaultProps = defaultProps;

export default Spin;
