import React from "react";
import { ActivityFeed } from "../../src";

const setDummyData = () => {
    let dummyData = [
        {
            name: "Johnny Doe",
            date: new Date().getTime(),
            taskName: "SWOT Analysis",
            imageUrl: "https://lh3.googleusercontent.com/proxy/X72M0nnzsdORIvkgny8Ndv5oPrWrAwj7Wu6iLJuCz-UZPjZalZ5yslp1vdF3XWbGdh5d6Iii-Cl1UlyiUKnquoWyArbJBtsAHvQjHWjGORETJXYhgNYq7c8mHs_oEgZCgiqY0RHtsOLJ8o2r",
            major: "Business",
            completed: false
        },
        {
            name: "Johnny Doe2",
            date: new Date().getTime(),
            taskName: "Assignment A",
            imageUrl: "https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t3/sample_images/img/index/ff_x_t3_002.JPG",
            major: "Law Course",
            completed: true
        },
        {
            name: "Johnny Doe3",
            date: new Date().getTime(),
            taskName: "Assignment B",
            major: "Business",
            imageUrl: "https://lh3.googleusercontent.com/proxy/X72M0nnzsdORIvkgny8Ndv5oPrWrAwj7Wu6iLJuCz-UZPjZalZ5yslp1vdF3XWbGdh5d6Iii-Cl1UlyiUKnquoWyArbJBtsAHvQjHWjGORETJXYhgNYq7c8mHs_oEgZCgiqY0RHtsOLJ8o2r",
            completed: false
        },
        {
            name: "Johnny Doe4",
            date: new Date().getTime(),
            taskName: "Project Brieft for developers and designers",
            major: "Service Design",
            imageUrl: "https://lh3.googleusercontent.com/proxy/X72M0nnzsdORIvkgny8Ndv5oPrWrAwj7Wu6iLJuCz-UZPjZalZ5yslp1vdF3XWbGdh5d6Iii-Cl1UlyiUKnquoWyArbJBtsAHvQjHWjGORETJXYhgNYq7c8mHs_oEgZCgiqY0RHtsOLJ8o2r",
            completed: true
        },

    ];
    return dummyData;
}
const ContainerStory = () => (
  <div>
    <ActivityFeed containerColor="#ffffff" data={setDummyData()}/>
  </div>
);

export default () => <ContainerStory />;
