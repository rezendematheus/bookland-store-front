import styled from 'styled-components'
import { formatCpf, mTel, mCEP, mCredit, mValidade } from '../inputMasks'
import Payment from '../Payment'

export default function Form({ props }) {
    const { type, handleForm, form } = props
    const creditPay = (
        <>
            <InsertCamp>
                <InputLabel htmlFor="credit">Número do cartão</InputLabel>
                <Input type="text" onChange={handleForm} value={mCredit(form.credit)} maxLength={19} minLength={19} name="credit" placeholder='CEP' required />
            </InsertCamp>
            <InsertCamp>
                <InputLabel htmlFor="parcelas">Parcelas</InputLabel>
                <Input type="text" onChange={handleForm} value={form.parcelas} maxLength={2} minLength={2} max={12} name="parcelas" placeholder='' required />
            </InsertCamp>
            <InsertCamp>
                <InputLabel htmlFor="creditname">Nome no cartão</InputLabel>
                <Input type="text" onChange={handleForm} value={(form.creditname).toUpperCase()} name="creditname" placeholder='' required />
            </InsertCamp>
            <InsertCamp>
                <InputLabel htmlFor="validade">Validade</InputLabel>
                <Input type="text" onChange={handleForm} value={mValidade(form.validade)} maxLength={5} minLength={5} name="validade" placeholder='' required />
            </InsertCamp>
            <InsertCamp>
                <InputLabel htmlFor="seccode">Código de segurança</InputLabel>
                <Input type="text" onChange={handleForm} value={form.seccode} maxLength={3} minLength={3} name="seccode" placeholder='' required />
            </InsertCamp>
        </>
    )
    return (
        <StyledForm>
            {type === "client" && (
                <>
                    <InsertCamp>
                        <InputLabel htmlFor="name">Nome completo</InputLabel>
                        <Input type="text" minLength={3} onChange={handleForm} value={form.name} name="name" placeholder='Insira aqui seu nome completo' required />
                    </InsertCamp>
                    <InsertCamp>
                        <InputLabel htmlFor="email">E-mail</InputLabel>
                        <Input type="email" onChange={handleForm} value={form.email} name="email" placeholder='Insira aqui seu E-mail' required />
                    </InsertCamp>
                    <InsertCamp>
                        <InputLabel htmlFor="cpf">CPF</InputLabel>
                        <Input type="text" onChange={handleForm} value={formatCpf(form.cpf)} maxLength={14} minLength={14} name="cpf" pattern='/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/' placeholder='Insira aqui seu CPF' required />
                    </InsertCamp>
                    <InsertCamp>
                        <InputLabel htmlFor="phone">Telefone</InputLabel>
                        <Input type="text" onChange={handleForm} value={mTel(form.phone)} maxLength={14} minLength={14} name="phone" placeholder='Insira aqui seu telefone' required />
                    </InsertCamp>
                </>
            )}





            {type === "adress" &&
                (
                    <>
                        <InsertCamp>
                            <InputLabel htmlFor="cep">CEP</InputLabel>
                            <Input type="text" onChange={handleForm} value={mCEP(form.credit)} maxLength={10} minLength={10} name="cep" placeholder='' required />
                        </InsertCamp>
                        <AdressInputs>
                            <InsertCamp>
                                <InputLabel htmlFor="adress">Endereço</InputLabel>
                                <Input type="text" onChange={handleForm} value={form.adress} name="adress" placeholder='Rua, Avenida, Travessa, etc...' required />
                            </InsertCamp>
                            <InsertCamp>
                                <InputLabel htmlFor="number">Número</InputLabel>
                                <Input type="text" onChange={handleForm} value={form.number} name="number" placeholder='N°' required />
                            </InsertCamp>
                        </AdressInputs>
                        <InsertCamp>
                            <InputLabel htmlFor="city">Cidade</InputLabel>
                            <Input type="text" onChange={handleForm} value={form.city} name="city" placeholder='' required />
                        </InsertCamp>
                    </>
                )

            }
            {type === "payment" &&
                (
                    <>
                        <Payment creditPay={creditPay}/>
                    </>
                )

            }
            
        </StyledForm>
    )
}

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const InsertCamp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const InputLabel = styled.label`
    width: 100%;
    height: fit-content;
    color: gray;
    padding: 12px 0px 6px 0px;
    display: flex;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    padding: 0px 10px 0px 10px;
    
    border: 1px solid gray;
    border-radius: 3px;

    display: flex;
    
    ::placeholder{
        color: gray;
        font-family: inherit;
    }
`

const AdressInputs = styled.div`
    display: flex;
    gap: 0px 15px;
    div:last-child{
        width: 30%;
    }
    
`