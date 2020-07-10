import React from "react";
import { storiesOf } from "@storybook/react";
import {withKnobs,boolean,select,text,color} from "@storybook/addon-knobs";
import { Title } from "../src";
import Basics from "./Showcase/TitleShowcase";

const titleLevel = [1, 2, 3, 4];

const TitleProps = () => ({
  children: text("label", "Business"),
  titleColor: color("color", "black"),
  isCrossOut: boolean("isCrossOut", false),
  level: select("level", titleLevel, 1)
});

storiesOf("Title", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Title {...TitleProps()} />)
  .add("Basics", () => <Basics />);
