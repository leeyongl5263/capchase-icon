import React from "react";
import { DropDownMenu, DropDownMenuItem, Icon } from "../../src";


const DropDownMenuStory = () => (
    <div>
        <div onClick={(e) => { console.log("clicked div"); e.stopPropagation(); }} style={{ width: "400px", height: "440px", backgroundColor: "#704FFF", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>

                <DropDownMenu trigger={<Icon kind="view-simple" color="white" style={{ marginRight: "10px" }}  />} >
                    <DropDownMenuItem>Edit</DropDownMenuItem>
                    <DropDownMenuItem>Delete</DropDownMenuItem>
                    <DropDownMenuItem>Move</DropDownMenuItem>
                </DropDownMenu>
            </div>

            <div style={{ width: "100%", height: "100%", backgroundColor: "yellowgreen" }}></div>
        </div>
    </div>
);

export default () => <DropDownMenuStory />;