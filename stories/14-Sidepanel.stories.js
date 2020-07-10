import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Sidepanel } from '../src'

storiesOf("Sidepanel", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <Sidepanel />)
