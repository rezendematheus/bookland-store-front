import { useState } from 'react'
import { redirect } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import ButtomComponent from '../../Components/Cart/ButtomComponent'
import { Container} from '../../Components/Cart/CartStyles'
import CheckoutForm from '../../Components/Checkout/CheckoutForm'
import Header from '../../Components/Header/Header'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/auth'
import axios from 'axios'

export default function CheckoutPage(){
    const {userInfo} = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${userInfo.token }` },
    };
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/get-cart`,config)
        .then((res)=> {
            let valor = 0
            res.data.forEach(item => valor += Number(item.valor))

        })
        .catch((err)=> console.log(err))

    },[])
    const types = ["client", "adress", "payment"]
    const [price, setPrice] = useState(0)
    const [paymentType, setPaymentType] = useState("pix")
    const [form, setForm] = useState({
        name: "",
        email: "",
        cpf: "",
        phone: "",
        adress: "",
        number: "",
        city: "",
        cep: "",
        credit:"",
        creditname:"",
        parcelas:"",
        validade:"",
        seccode:""
    })
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    function toggleOpens(setOpen){
        const setOpens = [setOpen1, setOpen2, setOpen3]
        const opens = [open1, open2, open3]
        for (let i = 0; i < opens.length; i++) {
            if(setOpen === setOpens[i]){
                setOpen(!opens[i])
                if(!opens === false){
                    for (let j = 0; j < opens.length; j++) {
                        if(j !== i){
                            let func =setOpens[j]
                            func(false)
                        }
                    }
                }
            }
        }
    }
    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(){

    }
    return(
        <Container>
            <Header/>
            <TitleCompontent>
                Finalize seu pedido
            </TitleCompontent>
            {types.map(item => (
                <CheckoutForm key={item} type={item} form={form} handleForm={handleForm} setForm={setForm} toggleOpens={toggleOpens} open={item === 'client' ? open1 : item === 'adress' ? open2 : open3} setOpen={item === 'client' ? setOpen1 : item === 'adress' ? setOpen2 : setOpen3} paymentType={paymentType} setPaymentType={setPaymentType}/>
            ))}
            <TotalValue><p>Valor total:</p> {`R$${price?.toString().replace(".",",")}`}</TotalValue>
            <ButtomComponent onClick={handleSubmit}>
                Fazer pedido
            </ButtomComponent>
        </Container>
    )
}

const TitleCompontent = styled.div`
    width: 350px;

    margin-top: 45px;
    margin-bottom: 23px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.08em;
    text-align: left;
`

const TotalValue = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    font-family: Roboto;
    font-size: 16px;

`
