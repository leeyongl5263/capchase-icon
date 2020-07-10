import React from "react";
import { action } from "@storybook/addon-actions";
import { Dot, Icon, Button, LinkButton, IconButton, ProfileButton, ProfileButtonList } from "../../src";


function clickHandler() {
  action("Clicked a button")();
}

const ButtonStory = () => (
  <div style={{ padding: "10px 10px" }}>
    All the Buttons
    <br />
    <Button onClick={clickHandler} kind="primary">
      Primary Button
    </Button>
    <Button onClick={clickHandler} kind="secondary">
      Secondary Button
    </Button>
    <Button onClick={clickHandler} kind="destructive">
      Destructive Button
    </Button>
    <Button onClick={clickHandler} kind="accent">
      Accent Button
    </Button>
    <Button onClick={clickHandler} kind="default" isDisabled={true}>
      Disabled Button
    </Button>
    <Button onClick={clickHandler} kind="nostyle">
      No Style Button
    </Button>
    <hr />
    <LinkButton
      target="_blank"
      hasUnderLine={true}
      href="https://ensightful.ca/"
    >
      Link with underline
    </LinkButton>
    <br />
    <LinkButton
      hasUnderLine={false}
      href="https://ensightful.ca/"
    >
      Link
    </LinkButton>
    <hr />
    Icon buttons
    <br />
    <IconButton onClick={clickHandler} >
      <Icon kind="calendar" />
    </IconButton>
    <Dot style={{ marginLeft: "10px" }} content={2} dotBorder={false} dotColor="#F06400" size="14px" horizontalDistance={-6}>
      <IconButton onClick={clickHandler} >
        <Icon kind="calendar" />
      </IconButton>
    </Dot>

    <br />

    <IconButton onClick={clickHandler} withBorder={true}>
      <Icon kind="bin" color="#C6C7C8" />
    </IconButton>
    <br />
    disabled icon button
    <IconButton onClick={clickHandler} withBorder={true} disabled={true}>
      <Icon kind="view-simple" color="#C6C7C8" />
    </IconButton>
    <br />

    <ProfileButtonList columnWidth="30px" amount={2} >
      <ProfileButton imgUrl="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png" />
      <ProfileButton imgUrl="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png" />
    </ProfileButtonList>
    more than three profile photos
    <br />
    <ProfileButtonList columnWidth="32px" amount={4} >
      <ProfileButton  >
        +2
      </ProfileButton>
      <Dot verticalDirection="bottom" verticalDistance={5} horizontalDistance={-5} dotColor="#FF9A21">
        <ProfileButton imgUrl="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png" />
      </Dot>
      <Dot verticalDirection="bottom" verticalDistance={5} horizontalDistance={-5} dotColor="#F8591E">
        <ProfileButton imgUrl="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png" />
      </Dot>
      <Dot verticalDirection="bottom" verticalDistance={5} horizontalDistance={-5} dotColor="#4DD87A">
        <ProfileButton imgUrl="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png" />
      </Dot>
    </ProfileButtonList>
    <br />
    <Dot verticalDirection="bottom" verticalDistance={5} horizontalDistance={4}>
      <ProfileButton imgUrl="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png" />
    </Dot>
  </div>
);

export default () => <ButtonStory />;
