
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar"
function Dashboard() {
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState(null);
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        if (storedToken) {
            listUser(storedToken);
        } else {
            console.log("Credenciales incorrectas");
        }
    }, []);
    const listUser = async (storedToken) => {
        try {
            const result = await axios.get("http://127.0.0.1:3000/api/usuarios/", {
            headers: {
                Authorization: `Bearer ${storedToken}`,
            },
            });
            setUsers(result.data); // Suponiendo que la API devuelve un array
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }
    };

    return (
        <div>
            <Navbar/>
            {token ? (
                <div>
                    <h1>LISTADO USUARIO</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>CORREO</th>
                                <th>PASSWORD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(( index) => (
                                <tr key={index.id}>
                                    <td>{index.correo}</td>
                                    <td>{index.contrasena}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No autorizado. Por favor, inicia sesión.</p>
            )}
        </div>
    );
}

export default Dashboard;