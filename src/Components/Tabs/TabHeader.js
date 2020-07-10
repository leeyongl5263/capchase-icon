import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const TabsHeader = styled.ul`
    display: table;
    width: 100%;
    list-style-type: none;

    & li {
        dispaly: table-cell;
        text-align: center;
        color: #ECF0F1;
        cursor: pointer;
    }

    & li > a {
        display: block;
        padding: 15px;
        background: #212F3D;
        transition: all .2s ease-in;
        transform: skew(-40deg);
    }

    & li > a span {
        display: block;
        transform: skew(40deg);
    }
    & li > a:hover {
        background: #2471A3;
        color: #F7F9F9;
    }

    & li.active > a {
        background: #2471A3;
    }
`;

const TabHeader = props => {
  function doClick(index, event) {
    props.click(index);
  }

  let activeClass = props.activeId;

  let tabs = props.data.map((item, index) => {
    return (
      <li className={activeClass === index ? "active" : ""}>
        <a onClick={thisIndex => doClick(thisIndex, index)}>
          <span>{item.name}</span>
        </a>
      </li>
    );
  });

  return <TabsHeader>{tabs}</TabsHeader>;
};

export default TabHeader;
