import React from "react";
import { ProjectOverview } from "../../src";

const setDummyData = () => {
    let dummyData = [
        {
            todo: 100,
            inprogress: 8,
            overdued: 5,
            completed: 7
        },

    ];
    return dummyData;
}
const ProjectOverviewStory = () => (
  <div>
    <ProjectOverview containerColor="#ffffff" data={setDummyData()}/>
  </div>
);

export default () => <ProjectOverviewStory />;
