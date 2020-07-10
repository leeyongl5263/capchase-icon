import React from "react";
import { Icon, Tag, IconTag } from "../../src";


const TagStory = () => (
  <div>
    <Tag tagColor="#E0DBFF" fontColor="#9E35EB">
      Business Student
    </Tag>
    <hr />
    <Tag tagColor="#FFBA53" fontColor="#ffffff">
      In Progress
    </Tag>
    <hr />
    <Tag tagColor="#E0E1E1">This month</Tag>
    <hr />
    <Tag isDisabled={true} tagColor="#E0E1E1">
      Disabled Tag
    </Tag>
    <hr />
    <Tag size="xsmall">XSMALL</Tag>
    <hr />
    <Tag size="small">SMALL TAG</Tag>
    <hr />
    <Tag size="medium">MEDIUM TAG</Tag>
    <hr />
    <Tag size="large">LARGE TAG</Tag>
    <hr />
    <IconTag size="small">
      <Icon kind="bin" width="20px" height="20px"
        style={{ marginRight: "5px" }}
      />7
    </IconTag>
    <hr />
    <IconTag size="medium">
      <Icon kind="profile" width="20px" height="20px"
        style={{ marginRight: "5px" }}
      />4
    </IconTag>
    <hr />
    <IconTag size="large" iconTagColor="#FFEACB" fontColor="#ff9a21">
      <Icon kind="calendar" width="20px" height="20px" color="#FF9A21"
      style={{marginRight:"5px"}}/>
      Oct,12
    </IconTag>
    <hr />
    <IconTag size="large">
      <Icon kind="calendar" width="20px" height="20px"
        style={{ marginRight: "5px" }}
      /> Oct,12
    </IconTag>
    |<IconTag size="medium">
      <Icon kind="profile" width="20px" height="20px"
        style={{ marginRight: "5px" }}
      />4
    </IconTag>
    |<IconTag size="small">
      <Icon kind="bin" width="20px" height="20px"
        style={{ marginRight: "5px" }}
      />7
    </IconTag>
  </div>
);

export default () => <TagStory />;
