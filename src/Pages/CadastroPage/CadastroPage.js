import Logo from "../../Components/Logo";
import {  useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import RenderButton from "../../Components/Render/RenderButton";
import { Wrapper, Input, Logar } from "./CadastroPageStyle";

export default function CadastroPage(){
    const [userInfo, setUserInfo]=useState({
        email:"",
        password:"",
        name:""
    });
    const {email, password, name}=userInfo;
    const [disabled, setDisabled]=useState(false);
    const [passwordConfirmation, setPasswordConfirmation]=useState([]);
    const navigate=useNavigate();

    function OnSubmit(e){
        e.preventDefault();
        setDisabled(true);
        if(passwordConfirmation!==password){
            alert("Confirmação de senha e senha devem ser iguais");
            return;
        }
        const body={email, password, name};
        const promisse=axios.post("", body);
        promisse.then(()=>{navigate('/login')});
        promisse.catch((error)=>{
            alert("Erro! Tente novamente.", error);
            setDisabled(false);
        });
    }

    return (
        <Wrapper onSubmit={OnSubmit}>
            <Logo/>
            <Input
                placeholder="Nome"
                type="name"
                value={name}
                onChange={(e)=>setUserInfo({...userInfo,name: e.target.value})}
                disabled={disabled}
                required
            />
            <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}
                disabled={disabled}
                required
            />
            <Input
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e)=>setUserInfo({...userInfo,password: e.target.value})}
                disabled={disabled}
                required
            />
            <Input
                placeholder="Confirme sua senha"
                type="password"
                value={passwordConfirmation}
                onChange={e=>setPasswordConfirmation(e.target.value)}
                disabled={disabled}
                required
            />
            <button
                type="submit"
                disabled={disabled}
            >
                <RenderButton state={disabled} text="Cadastrar" />
            </button>
            <Link to={`/login`}>
                <Logar>Já tem uma conta? Entre agora!</Logar>
            </Link>
        </Wrapper>
    );    
}
