import { useState } from "react"
import { AiOutlineArrowDown } from "react-icons/ai"
import styled from "styled-components"
import Form from "./CheckoutFormComponents/Form"

export default function Payment(){

    const [tab, setTab] = useState("pix")
    return(
        <>
            <Tabs>
                <Tab onClick={()=> setTab("pix")}>
                    Pix
                </Tab>
                <Tab onClick={()=> setTab("boleto")}>
                    Boleto
                </Tab>
                <Tab onClick={()=> setTab("credito")}>
                    Cartão de crédito
                </Tab>
            </Tabs>
            <TabMirror>
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
                {tab==='credito' && (
                    <></>
                )}
            </TabMirror>
        </>
    )
}

const Tabs = styled.div`
    display: flex;

    height: auto;
    gap: 0px 7px;
    font-size: 14px;
`

const Tab  = styled.div`

`

const TabMirror  = styled.div`

`
const PaymentBox = styled.div`

`

const PixImage = styled.div`

`