import styled from "styled-components";


const DividerStyles = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.dividerColor};
  width: ${props => props.width};
  ${props => (props.isFullWidth ? fullWidthStyle : "")}
`;

const fullWidthStyle = `
    width: 100%;
`;

export default DividerStyles;