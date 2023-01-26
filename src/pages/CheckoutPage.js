import styled from "styled-components"
import CartTableComponent from "../Components/Cart/CartTable"

export function CheckoutPage() {
    const books = [
        {
            imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/198381-1200-auto?v=638068006528530000&width=1200&height=auto&aspect=true",
            titulo: "O homem mais rico da Babilônia",
            valor: "24.90",
            quantidade: "1",
            id: 1
        },
        {
            imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/198381-1200-auto?v=638068006528530000&width=1200&height=auto&aspect=true",
            titulo: "O homem mais rico da Babilônia",
            valor: "24.90",
            quantidade: "1",
            id: 2
        },
        {
            imagem: "https://lojasaraivanew.vtexassets.com/arquivos/ids/198381-1200-auto?v=638068006528530000&width=1200&height=auto&aspect=true",
            titulo: "O homem mais rico da Babilônia",
            valor: "24.90",
            quantidade: "1",
            id: 3
        }
    ]
    return (
        <Content>
            <CartTableComponent books={books} />
        </Content>
    )
}



const Content = styled.div`
    display: flex;
    justify-items: center;
`