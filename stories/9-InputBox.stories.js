import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { InputBox } from "../src";
import Basics from "./Showcase/InputBoxShowcase";

const textboxProps = () => ({
    kind: select("kind", { DEFAULT: "default", INPUTAREA: "inputarea" }, "default"),
    hasError: boolean("hasError", false),
    disabled: boolean("isDisabled", false),
    readOnly: boolean("isReadOnly", false)
});

storiesOf("InputBox", module)
    .addDecorator(withKnobs)
    .add("Showcase", () => <InputBox {...textboxProps()} placeholder="input-box and input-area" />)
    .add("Basics", () => <Basics />);

