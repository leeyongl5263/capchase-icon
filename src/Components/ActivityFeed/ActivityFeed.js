import React from "react";
import PropTypes from "prop-types";
import ActivityFeedWithStyle from "./ActivityFeed.styles";

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
  width: "300px",
  isAlertOn: false,
  borderTopColor: "#FF9A21"
};
const ActivityFeed = React.forwardRef((props, ref) => {
  return (
    <ActivityFeedWithStyle {...props}>
      {props.children}
    </ActivityFeedWithStyle>
  );
});

ActivityFeed.displayName = "ActivityFeed";
ActivityFeed.propTypes = propTypes;
ActivityFeed.defaultProps = defaultProps;

export default ActivityFeed;
