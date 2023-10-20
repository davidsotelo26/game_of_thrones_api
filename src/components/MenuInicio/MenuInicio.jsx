import { Link } from 'react-router-dom';
import "./MenuInicio.css" 

export default function MenuInicio () {
    return <div className="menuinicio">
        <Link className="boton" to="characters">PERSONAJES</Link>
        <Link className="boton" to="houses">CASAS</Link>
        <Link className="boton" to="cronology">CRONOLOGIA</Link>
    </div>
}