import styled from "styled-components";
import { Container } from "../Container";

const ContainerWithStyle = styled(Container)`
    &:hover {
        background-color:#704FFF;
        color: white;
        div > svg {
            fill: white;
             }
  #title {
    color: white;
  }
  #progressBar > div > div {
      background-color: white;
  }
  #tag {
      color: white;
      background-color: #8E77FF;
  }
  #ddlMenu{
        color: black;
        }
`;

export default ContainerWithStyle;
