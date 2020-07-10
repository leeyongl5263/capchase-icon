import React from "react";
import {Container} from "../../src";

const ContainerStory = () => (
  <div>
    <Container containerColor="#ffffff" />
    <Container containerColor="#6347FF" />
    <Container isAlertOn={true} containerColor="#FFF0DA" />
    <Container containerColor="#ffffff" isAlertOn={true} />
    <Container
      containerColor="#ffffff"
      isAlertOn={true}
      height="185px"
      borderTopColor="#FF9A21"
    />
  </div>
);

export default () => <ContainerStory />;
