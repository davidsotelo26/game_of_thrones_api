import { Link } from 'react-router-dom';

export default function Menu () {
    return <>

        <Link to="characters">PERSONAJES</Link>
        <Link to="houses">CASAS</Link>
        <Link to="cronology">CRONOLOGIA</Link>
    </>
}