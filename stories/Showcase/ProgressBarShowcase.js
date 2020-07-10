import React from "react";
import { ProgressBar } from "../../src";

const ProgressBarStory = () => (
    <div>
        <div style={{ width: "340px", marginTop: "40px", marginLeft: "20px" }}>
            <ProgressBar kind="percentage" percentage="80%" />
        </div>
        <div style={{ width: "340px", marginTop: "40px", marginLeft: "20px" }}>
            <ProgressBar kind="fraction" denominator={5} numerator={1} />
        </div>
    </div>
);

export default () => <ProgressBarStory />;
