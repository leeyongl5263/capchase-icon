import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import tokens from "../Util/Token";
import { Icon } from "../Icon";

const Spinner = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoaderDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  z-index: 1000;
  visibility: ${props => props.visibility};
`;

const SpinDiv = styled.div`
  display: inline-block;
  animation: ${Spinner} 2s linear infinite;
`;

const DotDiv = styled.div`
  width: 40px;
  height: 40px;
  grid-template-columns: auto auto;
  position: relative;
  display: grid;
`;

const loadingAnimation = keyframes`
    0% {
        opacity: 1;
        width: 15px;
        height: 15px;
    }
    10%{
      opacity: 0.8;
      width: 13.5px;
      height: 13.5px;
    }
    35% {
        opacity: 0.6;
        width: 12px;
        height: 12px;
    }

    50% {
        opacity: 0.5;
        width: 10px;
        height: 10px;
    }
    65% {
        opacity: 0.6;
        width: 12px;
        height: 12px;
    }
    90% {
      opacity: 0.8;
      width: 13.5px;
      height: 13.5px;
    }
    100% {
        opacity: 1;
        width: 15px;
        height: 15px;
    }
`;

const Dot1 = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${tokens.color.brandBlue};
  margin: 1px;
  animation: ${loadingAnimation} 2s linear infinite;
`;

const logoAnimation = keyframes`
  0% {
    opacity: 1;
    width: 13px;
    height: 13px;
  }
  10%{
    opacity: 0.8;
    width: 12.5px;
    height: 12.px;
  }
  35% {
    opacity: 0.6;
    width: 11px;
    height: 11px;
  }

  50% {
    opacity: 0.5;
    width: 10px;
    height: 10px;
  }
  65% {
    opacity: 0.6;
    width: 11px;
    height: 11px;
  }
  90% {
  opacity: 0.8;
  width: 12.5px;
  height: 12.5px;
  }
  100% {
    opacity: 1;
    width: 13px;
    height: 13px;
  }
`;
const LogoDiv = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 50%;
  top: 20%;
  margin: 0;
  padding: 10;
`;

const IconDiv = styled.div`
  animation: ${logoAnimation} 2s linear infinite;
  position: relative;
  left: -50%;
`;

const SpinWithStyle = props => {
  console.log(props.show);
  let visibility = props.show ? "visible" : "hidden";

  return (
    <LoaderDiv visibility={visibility}>
      <SpinDiv>
        <DotDiv>
          <Dot1 />
          <Dot1 />
          {/* <LogoDiv>
            <IconDiv>
              <Icon.Logo />
            </IconDiv>
          </LogoDiv> */}
          <Dot1 />
          <Dot1 />
        </DotDiv>
      </SpinDiv>
    </LoaderDiv>
  );
};

export default SpinWithStyle;
