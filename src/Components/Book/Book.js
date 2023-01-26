import { Container, Upside, Middleside, Lowside } from "./BookStyles"

export default function Book({id,titulo,valor,img}){
    return(
        <Container>
            <Upside>
                <img src={img} alt="livro"/>
            </Upside>
            <Middleside>
                <p>{titulo}</p>
            </Middleside>
            <Lowside>
                <p>R${valor}</p>
                <button>comprar</button>
            </Lowside>
        
        </Container>
    )
}