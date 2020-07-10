import styled from "styled-components";
import tokens from '../Util/Token';

const CommentBoxStyles = styled.p`
  background-color: ${props => props.boxColor};
  border-radius: 8px;
  height: ${props => props.height};
  width: ${props => props.width};
  font-family: ${tokens.fontFamily.default};
  font-size: 16px;
  font-weight: regular;
  font-color: #3c3c3c;
  padding: 6px 6px 6px 6px;
`;

export default CommentBoxStyles;


