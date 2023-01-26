

export default function BookInCart({ imagem, titulo, valor, quantidade, id }) {
    return (
        <tr key={id}>
            <td><div><img src={imagem} alt={`img item ${id}`} /><p>{titulo}</p></div></td>
            <td><span><p>{quantidade}</p></span></td>
            <td>{`R$ ${valor.replace(".",",")}`}</td>
        </tr>
    )
}