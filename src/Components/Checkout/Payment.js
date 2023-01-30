import { useState } from "react"
import { AiOutlineArrowDown } from "react-icons/ai"
import styled from "styled-components"
import Form from "./CheckoutFormComponents/Form"

export default function Payment({creditPay}){

    const [tab, setTab] = useState("pix")
    return(
        <PaymentContainer>
            <Tabs>
                <Tab onClick={()=> setTab("pix")} selected={tab === 'pix' ? true : false}>
                    Pix
                </Tab>
                <Tab onClick={()=> setTab("boleto")} selected={tab === 'boleto' ? true : false}>
                    Boleto
                </Tab>
                <Tab onClick={()=> setTab("credit")} selected={tab === 'credit' ? true : false}>
                    Cartão de crédito
                </Tab>
            </Tabs>
            <TabMirror selected={tab}>
                {tab==="pix" && (
                    <PaymentBox>
                        <PixImage></PixImage>
                        <p>Para pagar finalize sua compra abaixo</p>
                        <AiOutlineArrowDown />
                    </PaymentBox>
                )}
                {tab==="boleto" && (
                    <PaymentBox>
                        <p>O boleto bancário será exibido após a confirmação da compra.</p>
                    </PaymentBox>
                )}
                {tab==='credit' && (
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

const PixImage = styled.div`

`