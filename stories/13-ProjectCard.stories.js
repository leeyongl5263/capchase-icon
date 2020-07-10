import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, array } from "@storybook/addon-knobs";
import { ProjectCard, DropDownMenu, DropDownMenuItem, Icon, Dot, ProfileButton, ProfileButtonList } from '../src';

const ProjectCardProps = () => (
    {
        projectUrl: text("projectUrl", "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-square1-512.png"),
        title: text("title", "Business"),
        tasks: array("tasks", ["Business Model Canvas", "SWOT Analysis", "Brainstorming Session"]),
        percentage: text("percentage", "80%"),
        deadline: text("deadline", "Oct, 12"),
        attachment: number("attachment", 7),
        message: number("message", 8),
    }
);

storiesOf("ProjectCard", module)
    .addDecorator(withKnobs)
    .add("Showcase", () =>
        <>
            <ProjectCard {...ProjectCardProps()}
                menu={<DropDownMenu id="ddlMenu" trigger={<Icon kind="dot" color="#E4E5E5" />} >
                    <DropDownMenuItem>Edit</DropDownMenuItem>
                    <DropDownMenuItem>Delete</DropDownMenuItem>
                    <DropDownMenuItem>Move</DropDownMenuItem>
                </DropDownMenu>}
                profileList={
                    <ProfileButtonList columnWidth="32px" amount={4}  >
                        <ProfileButton >
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
                } />
        </>);
