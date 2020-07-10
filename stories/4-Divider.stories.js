import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs,color,boolean,text } from "@storybook/addon-knobs";
import { Divider } from "../src";
import Basics from "./Showcase/DividerShowcase";


const DividerProps = () => ({
    dividerColor: color("color", "#E0E1E1"),
    width: text("width","80%"),
    isFullWidth: boolean("isFullWidth", false)
});

storiesOf("Divider", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Divider {...DividerProps()} />)
  .add("Basics", () => <Basics />);
