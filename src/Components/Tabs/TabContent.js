import React from "react";
import styled, { keyframes } from "styled-components";

const TabContentDiv = styled.div`
    margin-top: 15px;
    position: relative;
    padding: 20px 25px;
    overflow: hidden;
    background #000;

    & ${TabsTextItemDiv} {
        display: none;
        transform: translateY(100%);
    }

    & ${TabsTextItemDivShow} {
        dispaly: block;
        transform: translateY(0);
        animation: change .49s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    & ${TabsTextItemDiv} p {
        font: normal 15px/1.5 'Open Sans';
        color: #F2F3F4;
    }
    
`;

const TabsTextItemDiv = styled.div``;

const TabsTextItemDivShow = styled.div``;

const TabContent = props => {
  let activeClass = props.activeId;

  let content = props.data.map((item, index) => {
    const result =
      activeClass === index ? (
        <TabsTextItemDivShow>{item.text}</TabsTextItemDivShow>
      ) : (
        <TabsTextItemDiv>{item.text}</TabsTextItemDiv>
      );
    return result;
  });

  return <TabContentDiv>{content}</TabContentDiv>;
};

export default TabContent;
