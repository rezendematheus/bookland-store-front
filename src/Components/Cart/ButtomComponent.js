import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function ButtomComponent({children}){
    return(
        <StyledButtomComponent to={"/checkout"}>
            {children}
        </StyledButtomComponent>
    )
}


const StyledButtomComponent = styled(Link)`
    width: 242px;
    height: 37px;

    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    background-color: #AC7BD2;

    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Roboto;
    font-size: 16px;
    line-height: 19px;
    text-decoration: none;

    color: white;
`