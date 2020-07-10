import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, color, select, number } from "@storybook/addon-knobs";
import { ProfileCard, DropDownMenu, DropDownMenuItem, Icon } from '../src';

const ProfileCardProps = () => (
    {
        profileUrl: text("profileUrl", "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png"),
        loginStatus: text("loginStatus", "online"),
        userName: text("userName", "Victor Lang"),
        userIdentity: text("userIdentity", "@victorlang"),
        userRole: text("userRole", "Marketing Student"),
        percentage: text("percentage", "80%"),
        open: number("open", 0),
        completed: number("completed", 43),
        total: number("total", 43),
        overdue: number("overdue", 4),
    }
);

storiesOf("ProfileCard", module)
    .addDecorator(withKnobs)
    .add("Showcase", () =>
        <>
            <ProfileCard {...ProfileCardProps()} menu={
                <DropDownMenu id="ddlMenu" trigger={<Icon kind="dot" color="#E4E5E5" />} >
                    <DropDownMenuItem>Edit</DropDownMenuItem>
                    <DropDownMenuItem>Delete</DropDownMenuItem>
                    <DropDownMenuItem>Move</DropDownMenuItem>
                </DropDownMenu>} />
        </>);
