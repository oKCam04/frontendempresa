import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate=useNavigate()
  const Sesion=()=>{
    Navigate("/login")
  }
  const Registrar=()=>{
    Navigate("/register")
  }
  return (
    <div className="home">
      <h1>Hola, Bienvenido a la empresa</h1>
      <button onClick={Sesion}>Iniciar Sesión</button><button onClick={Registrar}>Registrarse</button>
    </div>
  );
}
export default Home;