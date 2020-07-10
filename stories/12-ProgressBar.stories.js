import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, text, number, color } from '@storybook/addon-knobs';
import { ProgressBar } from '../src'
import Basics from "./Showcase/ProgressBarShowcase";

const progressbarProps = () => ({
    kind: select("kind", { FRACTION: "fraction", PERCENTAGE: "percentage" }, "percentage"),
    fontColor: color("fontColor", "#8D8D8D"),
    barColor: color("barColor", "#6347FF"),
    percentage: text("percentage", "80%"),
    denominator: number("denominator", 5),
    numerator: number("numerator", 1)
});

storiesOf("ProgressBar", module)
    .addDecorator(withKnobs)
    .add("Showcase", () =>
        <div style={{ width: "340px", marginTop: "40px", marginLeft: "20px" }}>
            <ProgressBar {...progressbarProps()} />
        </div>)
    .add("Basics", () => <Basics />);

