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
                            imagem={book.img}
                            titulo={book.titulo}
                            valor={book.valor}
                            quantidade={1}
                            id={book.id}
                        />
                    )}
                </tbody>
            </table>
        </CartTable>
    )
}

