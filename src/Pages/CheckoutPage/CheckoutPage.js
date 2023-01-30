import { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../Components/Cart/CartStyles'
import CheckoutForm from '../../Components/Checkout/CheckoutForm'
import Header from '../../Components/Header/Header'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CheckoutPage() {
    const { userInfo } = useContext(AuthContext)
    const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/get-cart`, config)
            .then((res) => {
                let valor = 0
                res.data.forEach(item => valor += Number(item.valor))
                setPrice(valor)
            })
            .catch((err) => console.log(err))

    }, [])
    const navigate = useNavigate()
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
        credit: "",
        creditname: "",
        parcelas: "",
        validade: "",
        seccode: ""
    })
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    function toggleOpens(setOpen) {
        const setOpens = [setOpen1, setOpen2, setOpen3]
        const opens = [open1, open2, open3]
        for (let i = 0; i < opens.length; i++) {
            if (setOpen === setOpens[i]) {
                setOpen(!opens[i])
                if (!opens === false) {
                    for (let j = 0; j < opens.length; j++) {
                        if (j !== i) {
                            let func = setOpens[j]
                            func(false)
                        }
                    }
                }
            }
        }
    }
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()

        //suposta requisição para guardar os dados (não deu mais tempo)

        axios.delete(`${process.env.REACT_APP_API_BASE_URL}/delete-many-cart`, config)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))

        navigate(`/payment/${paymentType}`)
    }
    return (
        <Container>
            <Header />
            <TitleCompontent>
                Finalize seu pedido
            </TitleCompontent>
            <Form id='form1' onSubmit={handleSubmit}>
                {types.map(item => (
                    <CheckoutForm key={item} type={item} form={form} handleForm={handleForm} setForm={setForm} toggleOpens={toggleOpens} open={item === 'client' ? open1 : item === 'adress' ? open2 : open3} setOpen={item === 'client' ? setOpen1 : item === 'adress' ? setOpen2 : setOpen3} paymentType={paymentType} setPaymentType={setPaymentType} />
                ))}
            <TotalValue><p>Valor total:</p> {`R$${price?.toString().replace(".",",")}`}</TotalValue>
            <ButtomComponent type='submit' form="form1">
                Fazer pedido
            </ButtomComponent>
            </Form>
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
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtomComponent = styled.button`
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