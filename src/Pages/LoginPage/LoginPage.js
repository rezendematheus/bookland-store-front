import Logo from "../../Components/Logo/Logo";
import { Wrappeer, Input, Cadastrar } from "./LoginPageStyle";
import {  useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import RenderButton from "../../Components/Render/RenderButton";

export default function LoginPage(){
    const [userInfo, setUserInfo]=useState({
        email:"",
        password:""
    });
    const {email, password}=userInfo;
    const [disabled, setDisabled]=useState(false);
    const [next,setNext]=useState(false);

    function OnSubmit(e){
        e.preventDefault();
        setDisabled(true);
        const body={email, password};
        const promisse=axios.post("http://localhost:5000/login", body);
        promisse.then((answer)=>{
            localStorage.setItem("user", JSON.stringify({
                token: answer.data.token,
                name: answer.data.name
            }));
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
                    onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}
                />
                <Input 
                    placeholder="Senha"
                    disabled={disabled}
                    required
                    value={password}
                    type="password"
                    onChange={(e)=>setUserInfo({...userInfo, password: e.target.value})}
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