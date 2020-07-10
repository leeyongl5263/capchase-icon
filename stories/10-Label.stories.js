import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select, text,color } from "@storybook/addon-knobs";
import { Label } from "../src";
import Basics from "./Showcase/LabelShowcase";

const labelLevel = [1,2,3];

const LabelProps = () => ({
  children: text("label", "Assignment A"),
  labelColor: color("color","black"),
  isCrossOut: boolean("isCrossOut", false),
  level: select("level",labelLevel, 1)
});

storiesOf("Label", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Label {...LabelProps()} />)
  .add("Basics", () => <Basics />);
