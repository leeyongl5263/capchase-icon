import React from "react";
import { TaskOverview } from "../../src";

const setDummyData = () => {
    let dummyData = [
        {
            todo: 20,
            inprogress: 38,
            overdued: 5,
            completed: 7
        },

    ];
    return dummyData;
}
const TaskOverviewStory = () => (
  <div>
    <TaskOverview containerColor="#ffffff" data={setDummyData()}/>
  </div>
);

export default () => <TaskOverviewStory />;
