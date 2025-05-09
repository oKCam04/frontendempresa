import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./pages/Usuarios/context/AuthContext"
import Home from "./pages/Home";
import Login from "./pages/Usuarios/Pages/Login"
import Register from "./pages/Usuarios/Pages/Register"
import Dashboard from "./pages/Usuarios/Pages/Dashboard"
import Logout from "./pages/Usuarios/Pages/Logout"
import ListarProductos from "./pages/Productos/Pages/ListarProductos";
import RegistrarProductos from "./pages/Productos/Pages/RegistrarProductos";
import EditarProductos from "./pages/Productos/Pages/EditarProductos";
function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard"/> : <Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard/> : <Navigate to="/login"/>}></Route>
        <Route path="/logout" element={isAuthenticated ? <Logout/> : <Navigate to="/login"/>}></Route>
        <Route path="/listar" element={isAuthenticated ? <ListarProductos/> : <Navigate to="/login"/>}></Route>
        <Route path="/registrar" element={isAuthenticated ? <RegistrarProductos/> : <Navigate to="/login"/>}></Route>
        <Route path="/editar/:id" element={isAuthenticated ? <EditarProductos/> : <Navigate to="/login"/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
