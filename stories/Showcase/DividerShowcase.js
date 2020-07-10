import React from "react";
import { Divider } from "../../src";

const DividerStory = () => (
  <div>
    Divider with Full width
    <Divider dividerColor="#E0E1E1" isFullWidth={true} />
    <br />
    Default Divider
    <Divider dividerColor="#E0E1E1" width="80%" />
    <br />
  </div>
);

export default () => <DividerStory />;
