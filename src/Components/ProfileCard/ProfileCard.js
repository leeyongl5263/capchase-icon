import React from "react";
import PropTypes from "prop-types";
import { Container } from "../Container";
import { Button, ProfileButton } from "../Button";
import { Tag } from "../Tag";
import { ProgressBar } from "../ProgressBar";
import { Label } from "../Label";
import { Dot } from "../Dot";
import { Title } from "../Title";
import styled from "styled-components";
import tokens from "../Util/Token";

const propTypes = {
  profileUrl: PropTypes.string,
  loginStatus: PropTypes.string,
  userName: PropTypes.string,
  userIdentity: PropTypes.string,
  userRole: PropTypes.string,
  percentage: PropTypes.string,
  open: PropTypes.number,
  completed: PropTypes.number,
  total: PropTypes.number,
  overdue: PropTypes.number,
  menu: PropTypes.node
};

const defaultProps = {
  profileUrl:
    "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png",
  loginStatus: "online",
  userName: "Victor Lang",
  userIdentity: "@victorlang",
  userRole: "Marketing Student",
  percentage: "100%",
  open: 0,
  completed: 43,
  total: 43,
  overdue: 4
};

const ProfileCard = React.forwardRef((props, ref) => {
  const ContainerWithStyle = styled(Container)`
    &:hover {
      background-color: #704fff;
      color: white;
      div > svg {
        fill: white;
      }
      span {
        color: white;
        background-color: #9d8aff;
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
      #identity {
        color: #c9beff;
      }
      #ddlMenu {
        color: black;
      }
      #assignments > div > label {
        color: #c8bdff;
      }
    }
  `;
  const MenuContainerDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 20px 12px 10px 0px;
  `;

  const DetailsContainerDiv = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ProfileContainerDiv = styled.div`
    display: inline-block;
  `;

  const ProgressBarContainerDiv = styled.div`
    width: 340px;
    margin-top: 40px;
  `;

  const StatusContainerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;
  `;

  const StatusOpenDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  

  const StatusCompletedDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StatusTotalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const StatusOverdueDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  return (
    <ContainerWithStyle containerColor="white">
      <MenuContainerDiv>{props.menu}</MenuContainerDiv>
      <DetailsContainerDiv>
        <ProfileContainerDiv id="profilePhoto">
          <Dot
            verticalDirection="bottom"
            size="18px"
            horizontalDistance={7}
            dotColor={tokens.statusColor[props.loginStatus]}
            verticalDistance={2}
          >
            <ProfileButton
              style={{ height: "85px", width: "85px" }}
              imgUrl={props.profileUrl}
            />
          </Dot>
        </ProfileContainerDiv>
        <Title>{props.userName}</Title>
        <Label id="identity" labelColor="#989898">
          {props.userIdentity}
        </Label>
        <Tag
          tagColor="#E4E0FF"
          fontColor="#704FFF"
          size="large"
          style={{ marginTop: "20px" }}
        >
          {props.userRole}
        </Tag>
        <ProgressBarContainerDiv id="progressBar">
          <ProgressBar
            kind="percentage"
            percentage={props.percentage}
            fontColor="#CECECE"
          />
        </ProgressBarContainerDiv>
        <StatusContainerDiv id="assignments">
          <StatusOpenDiv>
            <Title level={3}>{props.open}</Title>
            <Label level={1} labelColor="#989898">
              Open
            </Label>
          </StatusOpenDiv>
          <StatusCompletedDiv>
            <Title level={3}>{props.completed}</Title>
            <Label level={1} labelColor="#989898">
              Completed
            </Label>
          </StatusCompletedDiv>
          <StatusTotalDiv>
            <Title level={3}>{props.total}</Title>
            <Label level={1} labelColor="#989898">
              Total
            </Label>
          </StatusTotalDiv>
          <StatusOverdueDiv>
            <Title level={3}>{props.overdue}</Title>
            <Label level={1} labelColor="#989898">
              Overdue
            </Label>
          </StatusOverdueDiv>
        </StatusContainerDiv>
      </DetailsContainerDiv>
    </ContainerWithStyle>
  );
});

ProfileCard.displayName = "ProfileCard";
ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
