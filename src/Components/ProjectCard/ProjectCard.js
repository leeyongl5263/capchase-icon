import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Container";
import { Tag, IconTag } from "../Tag";
import { ProgressBar } from "../ProgressBar";
import { Label } from "../Label";
import { Title } from "../Title";
import { Icon } from "../Icon";
import styled from "styled-components";
import tokens from "../Util/Token";

const propTypes = {
  projectUrl: PropTypes.string,
  menu: PropTypes.node,
  title: PropTypes.string,
  tasks: PropTypes.array,
  percentage: PropTypes.string,
  deadline: PropTypes.string,
  attachment: PropTypes.number,
  message: PropTypes.number,
  profileList: PropTypes.node
};

const defaultProps = {
  projectUrl:
    "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png"
};

const ProjectCard = React.forwardRef((props, ref) => {
  const ListItem = styled(Label)`
    display: flex;
    &:before {
      content: "";
      display: inline-block;
      width: 3px;
      height: 3px;
      background-color: #bfbfc0;
      border-radius: 50%;
      align-self: center;
      margin-right: 5px;
    }
  `;
  const ContainerWithStyle = styled(Container)`
    position: relative;
    height: 370px;
    &:hover {
      background-color: #704fff;
      color: white;
      div > img {
        border: 1px solid white !important;
      }
      span {
        color: #ddd7ff;
      }
      span > svg > path {
        fill: #9d89ff;
      }
      #progressBar > div {
        background-color: #9d89ff;
      }
      #progressBar > div > div {
        background-color: white;
      }
      label {
        color: white;
      }
      #ddlMenu {
        color: black;
      }
      #line {
        stroke: #9d89ff;
      }
    }
  `;

  const ImgContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `;

  const TitleContainerDiv = styled(Title)`
    margin-left: 10px;
    margin-top: 10px;
  `;
  const ListContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 5px;
  `;

  const FooterContainerDiv = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

  const ProgressbarContainerDiv = styled.div`
    width: 340px;
    margin: 15px;
  `;
  const IconsContainerDiv = styled.div`
    display: flex;
    align-items: center;
  `;

  
  return (
    <ContainerWithStyle containerColor="white">
      <ImgContainerDiv>
        <img
          src={props.projectUrl}
          alt=""
          height="60px"
          width="60px"
          style={{
            borderRadius: "8px",
            border: "1px solid #BFBFC0"
          }}
        />
        {props.menu}
      </ImgContainerDiv>
      <TitleContainerDiv level={3}>{props.title}</TitleContainerDiv>
      <ListContainerDiv>
        {props.tasks.map(e => (
          <ListItem labelColor="#989898" level={3}>
            {e}
          </ListItem>
        ))}
      </ListContainerDiv>
      <FooterContainerDiv>
        <ProgressbarContainerDiv id="progressBar">
          <ProgressBar
            kind="percentage"
            percentage={props.percentage}
            fontColor="#CECECE"
          />
        </ProgressbarContainerDiv>

        <IconsContainerDiv>
          <IconTag size="large" fontColor="#989898">
            <Icon
              kind="notification-bell"
              color="#E4E5E5"
              width="20px"
              height="20px"
              style={{ marginRight: "5px" }}
            />
            {props.deadline}
          </IconTag>
          <Icon kind="line" />
          <IconTag size="small" fontColor="#989898">
            <Icon
              kind="attachment"
              color="#E4E5E5"
              style={{ marginRight: "5px" }}
            />
            {props.attachment}
          </IconTag>
          <Icon kind="line" />
          <IconTag size="small" fontColor="#989898">
            <Icon
              kind="message"
              color="#E4E5E5"
              style={{ marginRight: "5px" }}
            />
            {props.message}
          </IconTag>
          <div style={{ margin: "0px 10px 0px auto" }}>{props.profileList}</div>
        </IconsContainerDiv>
      </FooterContainerDiv>
    </ContainerWithStyle>
  );
});

ProjectCard.displayName = "ProjectCard";
ProjectCard.propTypes = propTypes;
ProjectCard.defaultProps = defaultProps;

export default ProjectCard;
