import React from "react";
import { Title } from "../../src";

const ExampleStory = () => (
  <div>
    <Title titleColor="black">Assignment A</Title>
    <hr />
    <Title isCrossOut={true}>Creative Writing</Title>
    <hr />
    <Title level={1}>Johhny Doe</Title>
    <hr />
    <Title level={2}>Activity Feed</Title>
    <hr />
    <Title level={3}>Current Tasks</Title>
    <hr />
    <Title level={4}>Business</Title>
  </div>
);

export default () => <ExampleStory />;
