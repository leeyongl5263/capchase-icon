import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs";
import { Container  }from "../src";
import Basics from "./Showcase/ContainerShowcase";

const ContainerProps = () => ({
  containerColor: color("containerColor", "#ffffff"),
  width: text("width", "400px"),
  height: text("height", "440px"),
  isAlertOn: boolean("isAlertOn", false),
  borderTopColor: color("borderTopColor", "#FF9A21")
});

storiesOf("Container", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Container {...ContainerProps()} />)
  .add("Basics", () => <Basics />);
