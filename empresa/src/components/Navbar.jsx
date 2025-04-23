import {useAuth} from '../pages/Usuarios/context/AuthContext';
import { Link } from 'react-router-dom';
function Navbar(){
    const {logout}=useAuth();
    
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         <li class="nav-item active">
          <Link class="nav-link" tabindex="-1" to="/dashboard">Home</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link " tabindex="-1" to="/listar">Listado Productos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " tabindex="-1" to="/registrar">Registrar Productos</Link>
        </li>
        <li class="nav-item">
         <button onClick={logout}>Cerrar Sesion</button>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
        </ul>
        </div>
        </nav>
    )
}


export default Navbar;