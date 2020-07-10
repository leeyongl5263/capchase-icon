import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text, color } from '@storybook/addon-knobs';
import { DropDownList }from "../src";
import iconCalendar from '../src/Components/Icon/Calendar';
import Basics from "./Showcase/DropDownListShowcase";

const dropDownListProps = () => ({
    description: text("label", "Sort by"),
    wholeWidth: text("wholeWidth", "180") + "px",
    backgroundColor: color("backgroundColor", "white"),
    withIcon: boolean("withIcon", false),
    labelColor: color("labelColor", "gray"),
    iconSrc: iconCalendar
});

storiesOf("DropDownList", module)
    .addDecorator(withKnobs)
    .add("Showcase", () => <DropDownList {...dropDownListProps()} >
        <option>time expire</option>
        <option>October</option>
        <option>time expire</option>
        <option>October</option>
        <option>time expire</option>
        <option>October</option>
    </DropDownList>)
    .add("Basics", () => <Basics />);

