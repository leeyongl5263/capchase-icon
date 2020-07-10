import React from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "../ProgressBar";
import { Title } from "../Title";
import { Container } from "../Container";
import { Tag, IconTag } from "../Tag";
import ContainerWithStyle from "./TrelloCard.styles";
import { Button, ProfileButton } from "../Button";
import { Dot } from "../Dot";
import { Icon } from "../Icon";
import styled from "styled-components";
// import DropDownMenu from "@ensightful/dropdownmenu";

const propTypes = {
  isFinished: PropTypes.bool,
  title: PropTypes.string,
  denominator: PropTypes.string,
  date: PropTypes.string,
  filesNumber: PropTypes.number,
  messageNumber: PropTypes.number,
  profileUrl: PropTypes.string,
  dropDown: PropTypes.node,
  tag: PropTypes.string
};

const defaultProps = {
  isFinished: false,
  profileUrl:
    "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png",
  title: "Brainstorming",
  denominator: "1/5",
  date: "Oct,12",
  filesNumber: 5,
  messageNumber: 4,
  tag: "medium"
};

const TitleContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
`;

const TagContainerDiv = styled.div`
  margin-top: 10px;
  margin-left: 260px;
`;

const ProgressBarContainerDiv = styled.div`
  width: 179.69px;
  margin-top: 20px;
  margin-left: 10px;
`;

const IconContainerDiv = styled.div`
  margin-top: 20px;
  margin-left: -10px;
`;

const ProfileButtonContainerDiv = styled.div`
  margin-left: 325px;
  margin-top: -40px;
`;


function TrelloCard(props) {
  if (props.isFinished == true) {
    return (
      <React.Fragment>
        <Container
          containerColor="#DBF7E4"
          isAlertOn={true}
          borderTopColor="#4DD87A"
          height="85px"
        >
          <TitleContainerDiv>
            <Title level={2} isCrossOut={true}>
              {props.title}
            </Title>
            <div style={{ marginRight: "10px" }}>{props.dropDown}</div>
          </TitleContainerDiv>
        </Container>
      </React.Fragment>
    );
  } else
    return (
      <ContainerWithStyle height="185px" width="380px" containerColor="#ffffff">
        <TitleContainerDiv>
          <Title level={2} titleColor="#000000" id="title">
            {props.title}
          </Title>
          <div style={{ marginRight: "10px" }}>{props.dropDown}</div>
        </TitleContainerDiv>
        <TagContainerDiv>
          <Tag id="tag" tagColor="#E0DBFF" fontColor="#9E35EB" size="xsmall">
            {props.tag}
          </Tag>
        </TagContainerDiv>
        <ProgressBarContainerDiv id="progressBar">
          <ProgressBar
            kind="fraction"
            fontColor="#CECECE"
            denominator={props.denominator.split("/")[1]}
            numerator={props.denominator.split("/")[0]}
          />
        </ProgressBarContainerDiv>
        <IconContainerDiv>
          <IconTag size="large" fontColor="#989898">
            <Icon
              kind="notification-bell"
              color="#E4E5E5"
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            {props.date}
          </IconTag>
          |
          <IconTag size="medium" fontColor="#989898">
            <Icon
              kind="attachment"
              color="#E4E5E5"
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            {props.filesNumber}
          </IconTag>
          |
          <IconTag size="small" fontColor="#989898">
            <Icon
              kind="message"
              color="#E4E5E5"
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            {props.messageNumber}
          </IconTag>
        </IconContainerDiv>
        <ProfileButtonContainerDiv
          style={{ marginLeft: "310px", marginTop: "-40px" }}
        >
          <Dot
            verticalDirection="bottom"
            verticalDistance={5}
            horizontalDistance={4}
          >
            <ProfileButton imgUrl={props.profileUrl} />
          </Dot>
        </ProfileButtonContainerDiv>
      </ContainerWithStyle>
    );
}

TrelloCard.displayName = "TrelloCard";
TrelloCard.propTypes = propTypes;
TrelloCard.defaultProps = defaultProps;

export default TrelloCard;
