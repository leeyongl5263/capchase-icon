import React from "react";
import { DropDownList, Icon } from "../../src";


const DropDownListStory = () => (
    <div>
        <DropDownList description="Sort by" wholeWidth="180px">
            <option>time expire</option>
            <option>October</option>
            <option>time expire</option>
            <option>October</option>
            <option>time expire</option>
            <option>October</option>
        </DropDownList>
        <br />
        <DropDownList description="month" withIcon={true} wholeWidth="180px" iconSrc={Icon.Schedule} labelColor="#BFBFC0" backgroundColor="#F0F1F1">
            <option>sept 2019</option>
            <option>oct 2019</option>
            <option>nov 2019</option>
            <option>dec 2019</option>
        </DropDownList>
        <br />
        <DropDownList wholeWidth="110px" backgroundColor="#F0F1F1">
            <option>this month</option>
            <option>October</option>
            <option>time expire</option>
            <option>October</option>
            <option>time expire</option>
            <option>October</option>
        </DropDownList>
    </div>
);

export default () => <DropDownListStory />;