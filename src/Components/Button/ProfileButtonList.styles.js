import styled from 'styled-components';

const ListWithStyle = styled.div`
    display: grid;
    grid-template-columns: ${props => { return (props.columnWidth + " ").repeat(props.amount) }};
`;

export default ListWithStyle;