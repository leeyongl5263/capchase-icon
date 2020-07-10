import styled from 'styled-components';
import tokens from "../Util/Token";

const DDMItemWithStyle = styled.div`
    font-size: ${tokens.fontSize.default};
    cursor: pointer;
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${tokens.fontFamily.default};
    &:hover {
        width: 100%;
        color: white;
        background-color: ${tokens.color.brandBlue};
    }

    &:last-child {
        &:hover {
            border-radius: 0 0 20px 20px;
        }
        
    }
`;

export default DDMItemWithStyle;