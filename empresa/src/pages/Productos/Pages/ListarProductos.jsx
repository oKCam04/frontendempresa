import Navbar from "../../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListarProductos() {
  const [productos, setProductos] = useState([]);
  const storedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (storedToken) {
      listProductos(storedToken);
    }
  }, []);

  const listProductos = async (token) => {
    try {
      const result = await axios.get("http://127.0.0.1:3000/api/productos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProductos(result.data);
    } catch (e) {
      console.error("Error al obtener los productos:", e);
    }
  };

  const Eliminar = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/api/productos/${id}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
      listProductos(storedToken);
    } catch (e) {
      console.error("Error al eliminar el producto:", e);
    }
  };
  const Editar = (id) => {
    navigate(`/editar/${id}`);
  }
  return (
    <div>
      <Navbar />
      <h1>Listado de Productos</h1>
      <table className="tablaProductos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((index) => (
            <tr key={index.id}>
              <td>{index.nombre}</td>
              <td>{index.categoria}</td>
              <td>{index.precio}</td>
              <td>
                <button onClick={() => Eliminar(index.id)}>Eliminar</button>
                <button onClick={()=> Editar(index.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProductos;

