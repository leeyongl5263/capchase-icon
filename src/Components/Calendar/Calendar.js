import React from 'react';
import PropTypes from "prop-types";
import CalendarWithStyle from "./Calendar.styles";

const Kinds = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DESTRUCTIVE: "destructive",
  ACCENT: "accent",
  NOSTYLE: "nostyle"
};

const CalendarSizes = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  LONG: "long",
  XTRALONG: "xtralong"
};

const propTypes = {
  children: PropTypes.node,
  kind: PropTypes.oneOf(Object.values(Kinds)),
  size: PropTypes.oneOf(Object.values(CalendarSizes)),
  dateColor: PropTypes.string,
  date: PropTypes.string.isRequired,

};

const defaultProps = {
  children: null,
  kind: Kinds.DEFAULT,
  size: CalendarSizes.MEDIUM
};

const Calendar = React.forwardRef((props, ref) => {
  
  return (
    <CalendarWithStyle ref={ref} {...props} >
      {props.children}
    </CalendarWithStyle>
  );
});

Calendar.Kinds = Kinds;
Calendar.displayName = "Calendar";
Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;


