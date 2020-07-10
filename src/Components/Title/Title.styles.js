import styled from "styled-components";
import tokens from '../Util/Token';

const TitleStyles = styled.h1`
  font-size: ${props => tokens.title.fonts["level" + props.level]};
  font-family: ${tokens.fontFamily.default};
  font-weight: normal;
  position: relative;
  color: ${props => props.titleColor};
  display: block;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  ${props => (props.isCrossOut ? "text-decoration:line-through;" : "")}
`;

export default TitleStyles;
