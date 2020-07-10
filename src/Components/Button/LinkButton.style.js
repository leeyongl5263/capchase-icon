import tokens from '../Util/Token';
import styled from 'styled-components';


const LinkWithUnderLine = `
  text-decoration: underline;
`;

const LinkButtonStyle = styled.a`
  font-family: ${tokens.fontFamily.default};
  border-radius: ${tokens.border.radius};
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${tokens.color.brandOrange};
  }
  ${props => (props.hasUnderLine ? LinkWithUnderLine : "")}
`;




export default LinkButtonStyle;