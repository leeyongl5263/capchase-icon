import styled from "styled-components";
import tokens from '../Util/Token';

const IconTagStyle = styled.span`
  border-radius: 6px;
  border: none;
  border-width: 1px;
  font-family: ${tokens.fontFamily.default};
  color: ${props => props.fontColor};
  display: inline-flex;
  font-weight: regular;
  background-color: ${props => props.iconTagColor};
  letter-spacing: 0.8px;
  justify-content: center;
  align-items: center;
  margin: 0px 10px 0px 10px;

  ${props => IconTagSizeStyles(props)}
`;
const IconTagSizeStyles = props => {
    if (props.size == "small")
        return `font-size: 14px; ${tokens.icontag.sizes.small}`;
    else if (props.size == "medium")
        return `font-size: 14px; ${tokens.icontag.sizes.medium}`;
    else
        return `font-size: 14px; ${tokens.icontag.sizes.large}`;
}


export default IconTagStyle;


