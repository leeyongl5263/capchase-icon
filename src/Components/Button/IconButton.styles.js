import styled from 'styled-components';
import tokens from '../Util/Token';

const IconButtonWithStyle = styled.button`
    margin: 0;
    padding: 0;
    border: 0px;
    outline: none;
    display: inline-block;
    background-color: transparent;
    ${props => props.withBorder ? withBorderStyle : ""}
    &:hover {
        cursor: pointer;
    }
    ${props => props.disabled ? "pointer-events:none;" : ""}
`;

export default IconButtonWithStyle;

const withBorderStyle = `
    border: 1px solid ${tokens.iconButton.borderColor.default};
    width: ${tokens.iconButton.width};
    height: ${tokens.iconButton.height};
    border-radius: ${tokens.iconButton.borderRadius};
    background-color: ${tokens.iconButton.backgroundColor.default};
    display: flex;
    justify-content: center;
    &:hover, &:focus{
        border-color: ${tokens.iconButton.borderColor.onFocus};
        background-color: ${tokens.iconButton.backgroundColor.onFocus};
        path{
            fill: black;
        }
    }

    `;