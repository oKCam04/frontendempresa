import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Login(){
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigate=useNavigate();
    const {login}=useAuth();
    const loginU=async (event)=>{
        event.preventDefault();
        try{
            const respuesta=await axios.post("http://127.0.0.1:3000/api/login",{correo,contrasena});
            const token=respuesta.data.token;
            const user=respuesta.data.rpCorreo;
            if(token){
                login(token,user);
                navigate("/dashboard");
            }else{
                alert("Credenciales incorrectas");
            }
        }catch(error){
            alert("Error en el login");
            console.error(error);
        }
    };
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginU}>
                <input type="email" placeholder="Escriba su email" onChange={(e)=>setCorreo(e.target.value)} />
                <input type="password" onChange={(e)=>setContrasena(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;