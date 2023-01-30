
import { AiOutlineArrowDown } from "react-icons/ai"
import styled from "styled-components"

export default function Payment({creditPay, paymentType, setPaymentType}){

    return(
        <PaymentContainer>
            <Tabs>
                <Tab onClick={()=> setPaymentType("pix")} selected={paymentType === 'pix' ? true : false}>
                    Pix
                </Tab>
                <Tab onClick={()=> setPaymentType("boleto")} selected={paymentType === 'boleto' ? true : false}>
                    Boleto
                </Tab>
                <Tab onClick={()=> setPaymentType("credit")} selected={paymentType === 'credit' ? true : false}>
                    Cartão de crédito
                </Tab>
            </Tabs>
            <TabMirror selected={paymentType}>
                {paymentType==="pix" && (
                    <PaymentBox>
                        <p>Para pagar finalize sua compra abaixo</p>
                        <AiOutlineArrowDown />
                    </PaymentBox>
                )}
                {paymentType==="boleto" && (
                    <PaymentBox>
                        <p>O boleto bancário será exibido após a confirmação da compra</p>
                        <AiOutlineArrowDown />
                    </PaymentBox>
                )}
                {paymentType==='credit' && (
                    creditPay
                )}
            </TabMirror>
        </PaymentContainer>
    )
}

const Tabs = styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    height: auto;
    
    font-size: 14px;
    border:1px solid gray;
    box-sizing: border-box;
    padding-top: 10px;
`

const Tab  = styled.div`
    width: 30%;
    height: 60px;
    box-sizing: border-box;

    border-bottom: ${props => props.selected ? "5px solid green" : "none"};
    background-color: ${props => props.selected ? "whitesmoke" : "lightgrey"};
    text-align: center;
    display: flex;
    flex-direction: column-reverse;
    padding: 5px;
    color: black;
    
`

const TabMirror  = styled.div`
    width: 100%;
    border:${props => props.selected === 'credit' ? "" : "1px solid gray"}
`
const PaymentBox = styled.div`
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const PaymentContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: auto;
    padding: 10px;
`