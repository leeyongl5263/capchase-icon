import styled from 'styled-components';
import tokens from '../Util/Token';

const ProfileButtonWithStyle = styled.button`
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    border: 2px solid ${props => props.borderColor};
    border-radius: 50%;
    outline: none;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    color: ${props => props.fontColor};
    line-height: ${tokens.button.fontSize.profile};
    font-size: ${tokens.button.fontSize.profile};
`;

export default ProfileButtonWithStyle;