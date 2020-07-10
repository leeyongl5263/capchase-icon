import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text, color } from '@storybook/addon-knobs';
import { DropDownMenu, DropDownMenuItem, Icon } from "../src";
import Basics from "./Showcase/DropDownMenuShowcase";

storiesOf("DropDownMenu", module)
    .addDecorator(withKnobs)
    .add("Basics", () => <Basics />)

