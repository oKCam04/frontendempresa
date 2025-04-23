import Navbar from "../../../components/Navbar";
import axios from "axios";
import { useState } from "react";

function RegistrarProductos() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  const registrarProducto = async (event) => {
    event.preventDefault();
    const storedToken = localStorage.getItem("token");

    try {
      const enviar = await axios.post("http://127.0.0.1:3000/api/productos",{
          nombre,categoria,precio,},
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      alert("Producto registrado correctamente");
    } catch (e) {
      alert("Error al registrar el producto");
      console.error(e);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Registrar Productos</h1>
      <form onSubmit={registrarProducto}>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Categoría" onChange={(e) => setCategoria(e.target.value)} />
        <input type="text" placeholder="Precio" onChange={(e) => setPrecio(e.target.value)} />
        <button type="submit">Registrar Productos</button>
      </form>
    </div>
  );
}

export default RegistrarProductos;
