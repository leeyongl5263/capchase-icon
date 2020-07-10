import React from "react";
import PropTypes from "prop-types";
import ProjectOverviewWithStyle from "./ProjectOverview.styles";

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
const ProjectOverview = React.forwardRef((props, ref) => {
  return (
    <ProjectOverviewWithStyle {...props}>
      {props.children}
    </ProjectOverviewWithStyle>
  );
});

ProjectOverview.displayName = "ProjectOverview";
ProjectOverview.propTypes = propTypes;
ProjectOverview.defaultProps = defaultProps;

export default ProjectOverview;
