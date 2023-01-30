import styled from 'styled-components'
import { AiOutlineDown } from 'react-icons/ai'
import Form from './CheckoutFormComponents/Form'

export default function CheckoutForm(props) {
    const {open, setOpen, type, toggleOpens } = props

    return (
        <Wrapper>
            <FormHeader 
                open={
                    open
                } 
                onClick={
                    ()=>toggleOpens(setOpen)
                }>
                    {type === "client" && ("Dados Pessoais")}
                    {type === "adress" && ("Endereço")}
                    {type === "payment" && ("Forma de pagamento")}
                    
                <AiOutlineDown />
            </FormHeader>
            <CollapsibleWrapper 
                open={
                    open
                }>
                <Form props={props} />
            </CollapsibleWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: Roboto;
    box-sizing: border-box;
    width: 350px;
    margin-bottom: 30px;
    :nth-last-child(){
        margin-bottom: 90px;
    }
`
const CollapsibleWrapper = styled.div`
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    max-height: ${props => props.open ? "100%" : "0"};    
`
const FormHeader = styled.div`
    background-color: #AC7BD2;
    color: white;

    box-sizing: border-box;
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
    svg{
        width: 22px;
        height: 22px;
        rotate: ${props => props.open ? "180deg" : "0deg"};
    }
`


