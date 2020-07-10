import React from "react";
import PropTypes from "prop-types";
import TaskOverviewWithStyle from "./TaskOverview.styles";

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
const TaskOverview = React.forwardRef((props, ref) => {
  return (
    <TaskOverviewWithStyle {...props}>
      {props.children}
    </TaskOverviewWithStyle>
  );
});

TaskOverview.displayName = "TaskOverview";
TaskOverview.propTypes = propTypes;
TaskOverview.defaultProps = defaultProps;

export default TaskOverview;
