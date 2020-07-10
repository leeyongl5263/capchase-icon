import React from "react";
import tokens from '../Util/Token';
const Logo = props => {
    console.log(props.width)
    return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={props => (props.width ? props.width : "300")}
      height={props => (props.height ? props.height : "300")}
      viewBox="0 0 1178.000000 1091.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1091.000000) scale(0.100000,-0.100000)"
        fill={tokens.color.brandBlue}
        stroke="none"
      >
        <path
          d="M5605 8308 c-736 -83 -1382 -537 -1710 -1203 -130 -265 -200 -533
   -220 -847 l-7 -108 -696 0 -695 0 7 -147 c33 -715 232 -1323 620 -1897 517
   -766 1328 -1309 2235 -1496 273 -56 377 -65 736 -65 352 1 441 8 705 61 1066
   212 1994 915 2485 1885 242 478 365 952 391 1512 l7 147 -722 0 -721 0 0 83
   c0 263 -86 604 -220 875 -334 673 -987 1127 -1729 1202 -121 12 -352 11 -466
   -2z m2405 -2246 c0 -167 -40 -390 -106 -592 -199 -605 -660 -1097 -1251 -1334
   -567 -227 -1202 -204 -1748 63 -691 339 -1149 1004 -1214 1766 -6 66 -11 132
   -11 147 l0 28 2165 0 2165 0 0 -78z"
        />
      </g>
    </svg>
  );
};
export default Logo;
