import styled from "styled-components";
import tokens from '../Util/Token';

const ContainerStyles = styled.div`
  background-color: ${props => props.containerColor};
  border-radius: 15px;
  height: ${props => props.height};
  width: ${props => props.width};
  font-family: ${tokens.fontFamily.default};
  box-sizing: border-box;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  margin: 20px 20px 20px 20px;
  padding: 10px;

  ${props => (props.isAlertOn ? isAlertOnStyle(props.borderTopColor) : "")}

`;

export default ContainerStyles;

const isAlertOnStyle = (borderTopColor)=> {return `
    border-top: 15px solid;
    border-top-color: ${borderTopColor};
`}


