import styled from "styled-components";
import tokens from "../Util/Token";

const DotWithStyle = styled.div`
    display: inline-block;
    border: 0px;
    position: relative;
    ::${props => (props.horizontalDirection === "right" ? "after" : "before")} {
        text-align: center;
        background-color: ${props => props.dotColor};
        border: ${props => (props.dotBorder ? "2px solid white" : "0px")};
        border-radius: 50%;
        content: "${props => props.content}";
        height: ${props => props.size};
        width: ${props => props.size};
        position: absolute;
        font-size: ${tokens.dot.fontSize};
        font-family:${tokens.fontFamily.default};
        line-height:${tokens.dot.fontSize};
        color: ${tokens.dot.fontColor};
        ${props => props.horizontalDirection + ":" + props.horizontalDistance + "px"};
        ${props => props.verticalDirection + ":" + props.verticalDistance + "px"};
    }
`;

export default DotWithStyle;