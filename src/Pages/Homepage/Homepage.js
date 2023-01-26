import CategoryLine from "../../Components/CategoryLine/CategoryLine"
import { ScreenContainer } from "./HomepageStyle"

export default function Homepage(){
    return (
        <ScreenContainer>
            <CategoryLine titulo={"Adicionados recentemente"}/>
            <CategoryLine titulo={"Os mais vendidos"}/>
            <CategoryLine titulo={"Livros para ler em 2023"}/>
            <CategoryLine titulo={"Descubra Novas Histórias"}/>

        </ScreenContainer>
    )
}