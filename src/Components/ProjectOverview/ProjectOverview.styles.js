import styled from "styled-components";
import tokens from "../Util/Token";
import React, { useState, useEffect } from "react";
import { Title } from "../Title";
import { Tag } from "../Tag";
import { Label } from "../Label";
import { Icon } from "../Icon";

const graphRadius = 60;
const strokeWidthOfGraph = 15;

const ActivityFeedContainer = styled.div`
  background-color: ${props => props.containerColor};
  border-radius: 15px;
  height: 130px;
  width: 680px;
  font-family: ${tokens.fontFamily.default};
  box-sizing: border-box;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 20px 20px 20px;
  padding: 10px;

  ${props => (props.isAlertOn ? isAlertOnStyle(props.borderTopColor) : "")}
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

function ProjectOverviewWithStyle(props) {
  console.log(props.data);
  let toDo = parseInt(props.data[0].todo); // todo or projects?? Difference should be figured out
  let inProgress = parseInt(props.data[0].inprogress);
  let completed = parseInt(props.data[0].completed);
  let overDued = parseInt(props.data[0].overdued);
  let total = toDo + inProgress + completed + overDued;

  useEffect(() => {});
  
  return (
    <ActivityFeedContainer>
      <TitleContainer>
        <Title level={6} style={{ margin: 10}}> Project Overview</Title>

        <Icon.Graph />
      </TitleContainer>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent:'left', alignItems: 'baseline' }}>
          <Icon.DashBoard color={"rgb(97, 81, 249)"} width={19} height={19} />
          <span style={{ fontSize: 35, fontWeight: 4, marginLeft: 5, marginRight: 5 }}> {toDo} </span>
          <span style={{ fontSize: 14, color: 'gray'}}> Projects</span>
        </div>

        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent:'left', alignItems: 'baseline'}}>
          <Icon.Paper color={"rgb(93, 208, 133)"} width={19} height={19}/>
          <span style={{ fontSize: 35, fontWeight: 4, marginLeft: 5, marginRight: 5 }}> {completed} </span>
          <span style={{ fontSize: 14, color: 'gray'}}> Completed</span>
        </div>

        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent:'left', alignItems: 'baseline'}}>
          <Icon.Chart color={"rgb(253,151,52)"} width={19} height={19}/>
          <span style={{ fontSize: 35, fontWeight: 4, marginLeft: 5, marginRight: 5 }}> {inProgress} </span>
          <span style={{ fontSize: 14, color: 'gray'}}> In Progress</span>
        </div>

        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent:'left', alignItems: 'baseline'}}>
          <Icon.Chart color={"rgb(248, 86, 42)"} width={19} height={19}/>
          <span style={{ fontSize: 35, fontWeight: 4, marginLeft: 5, marginRight: 5 }}> {overDued} </span>
          <span style={{ fontSize: 14, color: 'gray'}}> Overdued</span>
        </div>
      </div>
    </ActivityFeedContainer>
  );
}

export default ProjectOverviewWithStyle;

const isAlertOnStyle = borderTopColor => {
  return `
    border-top: 15px solid;
    border-top-color: ${borderTopColor};
`;
};
