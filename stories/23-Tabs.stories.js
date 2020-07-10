
import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Basics from "./Showcase/TabsShowcase";

storiesOf("Tabs", module)
  .addDecorator(withKnobs)
  .add("Basics", () => <Basics />);
