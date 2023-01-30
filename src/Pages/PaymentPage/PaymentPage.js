import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import Pix from "../../Components/PosPayment/Pix.js"
import Boleto from "../../Components/PosPayment/Boleto"
import Credito from "../../Components/PosPayment/Credito"

export default function PaymentPage(){
    const params = useParams()
    return(
        <>
            <Header />
            {params.idPay === 'pix' && (
                <Pix />
            )}
            {params.idPay === 'credit' && (
                <Credito />
            )}
            {params.idPay === 'boleto' && (
                <Boleto />
            )}
        </>
    )
}