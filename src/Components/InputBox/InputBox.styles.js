import styled from 'styled-components';
import tokens from '../Util/Token';

const InputBoxWithStyle = styled.input`
    outline: none;
    font-size: ${tokens.inputbox.fontSize.default};
    font-family: ${tokens.fontFamily.default};
    ${props => props.kind == "default" ? defaultStyle : searchInputStyle}
    ${props => props.hasError ? hasErrorStyle : ""}
    ${props => props.disabled ? isDisabledStyle : ""}
    ${props => props.readOnly ? isReadOnlyStyle : ""}
`;

const searchInputStyle = `
    width: 80%;
    height: 70%;
    border: 0px;
    margin-right: 5%;
    text-indent: 10px;
    background-color: ${tokens.inputbox.backgroundColor.search};
    ::placeholder {
        color: ${tokens.inputbox.placeholderColor.search};
        font-size: ${tokens.inputbox.fontSize.search};
    }
`;

const defaultStyle = `
    background-color: ${tokens.inputbox.backgroundColor.default};
    border: 1px solid ${tokens.inputbox.borderColor.default};
    border-radius: ${tokens.inputbox.borderRadius.default};
    width: ${tokens.inputbox.width.default};
    height: ${tokens.inputbox.height.default};
    text-indent: 15px;
    ::placeholder {
        color: ${tokens.inputbox.placeholderColor.default};
        font-size: ${tokens.inputbox.fontSize.default};
    }
`;

const hasErrorStyle = `
    border-color: ${tokens.color.brandRed};
`;

const isDisabledStyle = `
    color: ${tokens.color.blackLighten70};
    cursor: not-allowed;
`;
const isReadOnlyStyle = `
    cursor: default;
`;

export default InputBoxWithStyle;


export const InputAreaWithStyle = styled.textarea`
    resize: none;
    outline: none;
    ${defaultStyle}
    font-size: ${tokens.inputbox.fontSize.default};
    font-family: ${tokens.fontFamily.default};
    height: ${tokens.inputbox.height.textarea};
    text-indent: 15px;
    padding: 1% 0;
    ${props => props.hasError ? hasErrorStyle : ""}
    ${props => props.disabled ? isDisabledStyle : ""}
    ${props => props.readOnly ? isReadOnlyStyle : ""}
    ::placeholder {
        color: ${tokens.inputbox.placeholderColor.default};
        font-size: ${tokens.inputbox.fontSize.default};
    }
`;

export const SearchButtonDiv = styled.div`
    width: 100%;
    height: 100%;
    outline: none;
    background-color: ${tokens.inputbox.backgroundColor.search};
    border-radius: ${tokens.inputbox.borderRadius.default};
    display: flex;
    align-items: center;
`;