import React from "react";
import { InputBox } from "../../src";

const InputBoxStory = () => (
    <div>
        <InputBox kind="default" placeholder="Enter project title" />
        <hr />
        <InputBox kind="inputarea" placeholder="Describe your project here…" />
        <hr />
        <div style={{ width: "180px", height: "48px", padding: "10px" }}>
            <InputBox kind="search" placeholder="Search" />
        </div>
    </div>
);

export default () => <InputBoxStory />;
