import styled from 'styled-components';
import tokens from '../Util/Token';

const ContainerWithStyle = styled.div`
        height:5px;
        background:${tokens.color.blackLighten70};
    `;

export default ContainerWithStyle;

export const PBWithStyle = styled.div`
        background-color:${props => props.barColor};
        position: relative;
        width: ${props => props.width};
        height: 100%;
    `;
export const ProgressValWithStyle = styled.div`
        padding: 3px 7px;
        font-size: 18px;
        color: ${props => props.fontColor};
        position: absolute;
        top: -32px;
        right: -23px;
    `;

