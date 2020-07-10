import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs,boolean, select,text, color } from '@storybook/addon-knobs';
import { Tag } from '../src';
import Basics from "./Showcase/TagShowcase";


const TagSizes = {
    XSMALL: "xsmall",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large"
};

const TagProps = () => ({
  children: text("label", "Daily Read"),
  tagColor: color("color","#E0E1E1"),
  fontColor: color("font-color", "#000000"),
  size: select("size", TagSizes, "xsmall"),
  isDisabled: boolean("isDisabled", false)
});

storiesOf("Tag", module)
    .addDecorator(withKnobs)
    .add("Showcase", () => <Tag {...TagProps()} />)
    .add("Basics", () => <Basics />)

