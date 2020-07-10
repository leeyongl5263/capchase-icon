import React from "react";
import { action } from "@storybook/addon-actions";
import { IconButton, Button, Label, Dot, Icon } from "../../src";

function clickHandler() {
    action("Clicked a button")();
}

const DotStory = () => (
    <div>
        <Dot >
            <Button onClick={clickHandler} kind="primary">
                Primary Button
            </Button>
        </Dot>
        <br />
        <Dot verticalDirection="bottom" verticalDistance={3} horizontalDistance={0}>
            <IconButton kind="profile" imgUrl="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png"> <Icon kind="bin" color="#C6C7C8" />Test </IconButton>
        </Dot>
        <br />
        <Dot verticalDistance={5} horizontalDistance={-5} dotBorder={false}><Label labelColor="black">Link</Label>
        </Dot>
        <br />
        <Dot content="9" size="14px">
            <Button onClick={clickHandler} kind="primary">
                Primary Button
            </Button>
        </Dot>
    </div>
);

export default () => <DotStory />;