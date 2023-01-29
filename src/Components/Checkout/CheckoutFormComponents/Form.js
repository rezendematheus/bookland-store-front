import styled from 'styled-components'

export default function Form({ props }) {
    const { type, handleForm, form } = props
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
                        <Input type="text" onChange={handleForm} value={form.cpf} maxLength={11} minLength={11} name="cpf" pattern='/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/' placeholder='Insira aqui seu CPF' required />
                    </InsertCamp>
                    <InsertCamp>
                        <InputLabel htmlFor="phone">Telefone</InputLabel>
                        <Input type="text" onChange={handleForm} value={form.phone} name="phone" placeholder='Insira aqui seu telefone' required />
                    </InsertCamp>
                </>
            )}





            {type === "adress" &&
                (
                    <>

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
                            <Input type="text" onChange={handleForm} value={form.city} name="city" placeholder='Insira aqui sua cidade' required />
                        </InsertCamp>
                    </>
                )

            }
            {type === "payment" &&
                (
                    <>

                        <AdressInputs>
                            <InsertCamp>
                                <InputLabel htmlFor="adress">Endereço</InputLabel>
                                <Input type="text" onChange={handleForm} name="name" placeholder='Rua, Avenida, Travessa, etc...' required />
                            </InsertCamp>
                            <InsertCamp>
                                <InputLabel htmlFor="number">Número</InputLabel>
                                <Input type="text" onChange={handleForm} name="email" placeholder='N°' required />
                            </InsertCamp>
                        </AdressInputs>
                        <InsertCamp>
                            <InputLabel htmlFor="city">Cidade</InputLabel>
                            <Input type="text" onChange={handleForm} placeholder='Insira aqui sua cidade' required />
                        </InsertCamp>
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