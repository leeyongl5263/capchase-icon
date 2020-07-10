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
  height: ${props => props.height};
  width: 280px;
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

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(" ");

  return d;
}

function TaskOverviewWithStyle(props) {
  console.log(props.data);
  let toDo = parseInt(props.data[0].todo);
  let inProgress = parseInt(props.data[0].inprogress);
  let completed = parseInt(props.data[0].completed);
  let overDued = parseInt(props.data[0].overdued);
  let total = toDo + inProgress + completed + overDued;
  let adder = 0;
  useEffect(() => {
    let toDoDeg = (toDo / total) * 360;
    document
      .getElementById("toDo")
      .setAttribute("d", describeArc(150, 70, graphRadius, adder, toDoDeg));
    adder += toDoDeg;
    let inProgressDeg = (inProgress / total) * 360;
    document
      .getElementById("inProgress")
      .setAttribute(
        "d",
        describeArc(150, 70, graphRadius, adder, adder + inProgressDeg)
      );
    adder += inProgressDeg;
    let completedDeg = (completed / total) * 360;
    document
      .getElementById("completed")
      .setAttribute("d", describeArc(150, 70, graphRadius, adder, adder + completedDeg));
    adder += completedDeg;
    let overDuedDeg = (overDued / total) * 360;
    document
      .getElementById("overDued")
      .setAttribute("d", describeArc(150, 70, graphRadius, adder, adder + overDuedDeg));
  });

  return (
    <ActivityFeedContainer>
      <TitleContainer>
        <Title level={4}> Task Overview</Title>

        <Icon.Graph />
      </TitleContainer>
      <div style={{ height: 150, width: 200, margin: 'auto', marginTop: 40,position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <svg style={{ position: "absolute" }}>
          <path
            id="toDo"
            fill="none"
            stroke-linecap="round"
            stroke="rgb(97, 81, 249)"
            stroke-width={strokeWidthOfGraph}
          />
        </svg>
        <svg style={{ position: "absolute" }}>
          <path
            id="inProgress"
            fill="none"
            stroke-linecap="round"
            stroke="rgb(253,151,52)"
            stroke-width={strokeWidthOfGraph}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            marginTop: 10,
            paddingTop: 20,
            textAlign: 'center',
            backgroundColor: 'lightgray',
            width: 110,
            height: 105,
            borderRadius: 60,
            zIndex: -1
          }}
        >
          <p style={{ fontSize: 20, fontWeight: 3, marginBottom: 0}}> {total - completed}</p>
          <p style={{ fontSize: 12, color: 'gray', marginTop: 0}}> Open Tasks</p>
        </div>
        <svg style={{ position: "absolute" }}>
          <path
            id="completed"
            fill="none"
            stroke-linecap="round"
            stroke="rgb(93, 208, 133)"
            stroke-width={strokeWidthOfGraph}
          />
        </svg>
        <svg style={{ position: "absolute" }}>
          <path
            id="overDued"
            fill="none"
            stroke-linecap="round"
            stroke="rgb(248, 86, 42)"
            stroke-width={strokeWidthOfGraph}
          />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{ marginRight: 20, display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', textAlign: 'center'}}>
              <div style={{ width: 15, height: 15, borderRadius: 7.5,  backgroundColor: "rgb(97, 81, 249)"}}>

              </div>
              <p style={{ marginBottom: 5, marginTop: 10}}> {toDo} </p>
              <p style={{ fontSize: 8, color: 'gray', marginTop: 0}}> To Do</p>
          </div>
          <div style={{  marginRight: 20, display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', textAlign: 'center'}}>
              <div style={{ width: 15, height: 15, borderRadius: 7.5,  backgroundColor: "rgb(253,151,52)"}}>

              </div>
              <p style={{ marginBottom: 5, marginTop: 10}}> {inProgress}</p>
              <p style={{ fontSize: 8, color: 'gray', marginTop: 0}}> In Progress</p>
          </div>
          <div style={{ marginRight: 20, display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column', textAlign: 'center'}}>
              <div style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: "rgb(93, 208, 133)"}}>

              </div>
              <p style={{ marginBottom: 5, marginTop: 10}}> {completed}</p>
              <p style={{ fontSize: 8, color: 'gray', marginTop: 0}}> Completed</p>
          </div>
          <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column',textAlign: 'center' }}>
              <div style={{ width: 15, height: 15, borderRadius: 7.5,  backgroundColor: "rgb(248, 86, 42)"}}>

              </div>
              <p style={{ marginBottom: 5, marginTop: 10}}> {overDued}</p>
              <p style={{ fontSize: 8, color: 'gray', marginTop: 0}}> Overdued</p>
          </div>
      </div>
    </ActivityFeedContainer>
  );
}

export default TaskOverviewWithStyle;

const isAlertOnStyle = borderTopColor => {
  return `
    border-top: 15px solid;
    border-top-color: ${borderTopColor};
`;
};
