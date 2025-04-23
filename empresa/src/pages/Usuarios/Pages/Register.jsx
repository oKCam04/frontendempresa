import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate(); 

  const registrarUsuario = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3000/api/register", {
        nombre,
        correo,
        contrasena,
      });
      alert("Usuario registrado correctamente");
      navigate("/login"); 
    } catch (error) {
      alert("Error al registrar");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={registrarUsuario}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="submit">Registrarse</button>
        <button type="button" onClick={() => navigate("/")}>Regresar</button>
      </form>
    </div>
  );
}

export default Register;

