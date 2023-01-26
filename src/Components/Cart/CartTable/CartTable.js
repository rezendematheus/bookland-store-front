import BookInCart from "./BookInCart.js"
import {CartTable} from "./CartTableStyles.js"

export default function CartTableComponent({books}){
    return (
        <CartTable>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>
                        <BookInCart
                            imagem={book.imagem}
                            titulo={book.titulo}
                            valor={book.valor}
                            quantidade={book.quantidade}
                            id={book.id}
                        />
                    )}
                </tbody>
            </table>
        </CartTable>
    )
}

