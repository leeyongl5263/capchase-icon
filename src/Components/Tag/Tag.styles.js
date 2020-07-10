import styled from "styled-components";
import tokens from '../Util/Token';

const TagWithStyle = styled.span`
  border-radius: 6px;
  border: none;
  border-width: 1px;
  color: ${props => props.fontColor};
  display: inline-flex;
  font-weight: regular;
  font-family: ${tokens.fontFamily.default};
  background-color: ${props => props.tagColor};
  letter-spacing:0.8px;
  justify-content:center;
  align-items: center;
  text-decoration: none;

  ${props => (props.isDisabled ? disabledStyles : "")}
  ${props => TagSizeStyles(props)}
`;

const TagSizeStyles = props => {
  if(props.size == "xsmall")
  return `font-size: 14px; ${tokens.tag.sizes.xsmall};`;
  if (props.size == "small")
    return `font-size: 14px; ${tokens.tag.sizes.small};`;
  else if (props.size == "medium")
    return `font-size: 14px; ${tokens.tag.sizes.medium}`;
  else
    return `font-size: 16px; ${tokens.tag.sizes.large}`;
}


const disabledStyles = `
  box-shadow: none;
  color: grey;
  cursor: not-allowed;
  text-decoration: none;
  text-shadow: none;

  &:focus {
    box-shadow: none;
    text-shadow: none;
    transform: none;
  }
`;


export default TagWithStyle;


