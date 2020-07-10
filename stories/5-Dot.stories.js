import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, color, select, number, boolean } from "@storybook/addon-knobs";
import { Dot, Button } from "../src";
import Basics from "./Showcase/DotShowcase";

function clickHandler() {
    action("Clicked a button")();
}

const DotProps = () => ({
    horizontalDirection: select("horizontal direction", ["right", "left"], "right"),
    horizontalDistance: number("horizontal distance", -4),
    verticalDirection: select("vertical direction", ["top", "bottom"], "top"),
    verticalDistance: number("vertical distance", -2),
    dotColor: color("dot color", "#6BDE80"),
    dotBorder: boolean("dot border", true),
    content: number("content"),
    size: number("size", 7) + "px"
});

storiesOf("Dot", module)
    .addDecorator(withKnobs)
    .add("Showcase", () =>
        <Dot style={{ marginTop: "20px", marginLeft: "5px" }} {...DotProps()} >
            <Button onClick={clickHandler} kind="primary">
                Primary Button
            </Button>
        </Dot>)
    .add("Basics", () => <Basics />);
