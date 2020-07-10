import React, { useState, useEffect } from "react";
import TabHeader from "./TabHeader";
import TabContent from "./TabContent";
import styled, { keyframes } from "styled-components";

const change = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Tabs = props => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(props.data);

  function changeTabOnClick(index) {
    console.log("clicked", index);
    setActiveTab(index);
  }
  return (
    <div className="tabs-body">
      <TabHeader data={data} click={changeTabOnClick} activeId={activeTab} />
      <TabContent data={data} activeId={activeTab} />
    </div>
  );
};

export default Tabs;
