import styled from 'styled-components';
import iconArrow from '../Icon/svg/drop-down-arrow.svg';
import tokens from '../Util/Token';

const DDLWithStyle = styled.select`
    width: auto;
    height: ${tokens.dropDownList.height};
    font-size: ${tokens.fontSize.default};
    border: none;
    margin-left: 5px;
    outline:none;
    border-radius:8px;
    background:url(${iconArrow}) no-repeat right center;
    padding-right: 18px;
    font-family:${tokens.fontFamily.default};

    /* hide default arrow*/
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    
`;

export const DDLContainer = styled.div`
    background-color:${props => props.backgroundColor};
    width: ${props => props.wholeWidth};
    border-radius: ${tokens.dropDownList.borderRadius};
    display: flex;
    align-items:center;
`;

export default DDLWithStyle;