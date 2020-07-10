import React from "react";
import { Tabs } from "../../src";
let data = [
    {
        name: 'Tab001',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
    },
    {
        name: 'Tab002',
        text: 'asd'
    },
    {
        name: 'Tab003',
        text: 'asdsa'
    }
];
const TabStory = () => (
  <div>
    <Tabs data={data} />
  </div>
);

export default () => <TabStory />;
