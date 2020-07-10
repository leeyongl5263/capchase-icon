import styled from 'styled-components';
import tokens from "../Util/Token";

const DDMWithStyle = styled.div`
    position: absolute;
    background-color: rgba(111, 115, 120, 0.5);
    background-color: ${tokens.color.greyLighten90};
    opacity: 0.7;
    border-radius: 0 0 20px 20px;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    
`;

export default DDMWithStyle;