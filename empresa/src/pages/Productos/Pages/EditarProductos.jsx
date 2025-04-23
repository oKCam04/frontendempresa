import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditarProductos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:3000/api/productos/${id}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        const producto = res.data;
        setNombre(producto.nombre);
        setCategoria(producto.categoria);
        setPrecio(producto.precio);
      } catch (e) {
        console.error("Error al cargar el producto:", e);
      }
    };
    obtenerProducto();
  }, [id]);

  const actualizarProducto = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://127.0.0.1:3000/api/productos/${id}`,
        {
          nombre,
          categoria,
          precio,
        },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      alert("Producto actualizado correctamente");
      navigate("/listar");
    } catch (e) {
      console.error("Error al actualizar el producto:", e);
    }
  };
  const regresar = () => {
    navigate("/listar");
  }
  return (
    <div>
      <h1>Editar Producto</h1>
      <form onSubmit={actualizarProducto}>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoría" />
        <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" />
        <button type="submit">Actualizar</button>
        <button onClick={regresar}>Volver</button>
      </form>
    </div>
  );
}

export default EditarProductos;

