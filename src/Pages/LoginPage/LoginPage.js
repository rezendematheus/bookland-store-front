import Logo from "../../Components/Logo/Logo";
import { Wrappeer, Input, Cadastrar } from "./LoginPageStyle";
import {  useContext, useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import RenderButton from "../../Components/Render/RenderButton";
import { AuthContext } from "../../Context/auth";

export default function LoginPage(){
    const { setUserInfo} = useContext(AuthContext)
    const [loginInfo, setLoginInfo]=useState({
        email:"",
        password:""
    });
    const {email, password}=loginInfo;
    const [disabled, setDisabled]=useState(false);
    const [next,setNext]=useState(false);

    function OnSubmit(e){
        e.preventDefault();
        setDisabled(true);
        const body={email, password};
        const promisse=axios.post(`${process.env.REACT_APP_API_BASE_URL}login`, body);
        promisse.then((answer)=>{
            setUserInfo(answer.data)
            localStorage.setItem("user", answer.data.token);
            setNext(true);
        });
        promisse.catch((error)=>{
            alert("Erro! Tente novamente.", error);
            setDisabled(false);
        });
    }

    if(next){
        return <Navigate to={"/"}/>
    }else{
        return (
            <Wrappeer onSubmit={OnSubmit}>
                <Link to="/"><Logo/></Link>
                <Input
                    placeholder="Email"
                    disabled={disabled}
                    required
                    value={email}
                    type="email"
                    onChange={(e)=>setLoginInfo({...loginInfo, email: e.target.value})}
                />
                <Input 
                    placeholder="Senha"
                    disabled={disabled}
                    required
                    value={password}
                    type="password"
                    onChange={(e)=>setLoginInfo({...loginInfo, password: e.target.value})}
                />
                <button
                    type="submit"
                    disabled={disabled}
                >
                    <RenderButton state={disabled} text="Entrar" />
                </button>
                <Link to={`/cadastro`}>
                    <Cadastrar> Primeira vez aqui? Cadastre-se!</Cadastrar>
                </Link>
            </Wrappeer>
        );
    }    
}