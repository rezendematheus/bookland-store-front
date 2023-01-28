import ButtomComponent from "../Components/Cart/ButtomComponent.js"
import { Container, TitleCompontent } from "../Components/Cart/CartStyles.js"
import CartTableComponent from "../Components/Cart/CartTable/CartTable"
import Header from "../Components/Header/Header.js"

export function CartPage() {
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
        <Container>
            <Header/>
            <TitleCompontent>Sua sacola</TitleCompontent>
            <CartTableComponent books={books} />
            <ButtomComponent>
                Prosseguir
            </ButtomComponent>
        </Container>
    )
}








