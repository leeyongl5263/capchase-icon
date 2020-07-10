import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Basics from "./Showcase/TaskOverviewShowcase";

storiesOf("TaskOverview", module)
  .addDecorator(withKnobs)
  .add("Basics", () => <Basics />);
