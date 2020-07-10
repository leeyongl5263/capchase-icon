import React from "react";
import { Label } from "../../src";


const LabelStory = () => (
  <div>
    <Label labelColor="white">Brainstorming</Label>
    <hr />
    <Label labelColor="black">Assignment A</Label>
    <hr />
    <Label isCrossOut={true}>Creative Writing</Label>
    <hr />
    <Label level={1}>Johhny Doe</Label>
    <hr />
    <Label level={2}>Activity Feed</Label>
    <hr />
    <Label level={3}>Current Tasks</Label>
  </div>
);

export default () => <LabelStory />;
