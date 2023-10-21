import "./CharacterInfoPageStyle.css"
import { Link } from 'react-router-dom';

export default function CharacterInfoPage () {

return <section className="FichaPersonaje">
<div className="HeaderMenu">

        <div className="botonvolver">
        <Link className="linkvolver" to="/characters">
            <img className="flechavolver" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/e042365d-a1dc-4fef-ab6c-245a7c85f922.svg" alt="" />
            <p className="textovolver">VOLVER</p>
        </Link>
        </div>

        <div className="botonbanderas">
        <img className="bandera" src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/spain_1_pmsxsq.png" alt="spainflag" />
        <img className="bandera" src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/united-kingdom_1_hyhwxc.png" alt="ukflag" />
        </div>
</div>

<div className="descripcionGeneral">
<div className="InfoGeneral">
    <div className="Infofoto">
        <img height={"320px"} src="https://media.vogue.es/photos/5cc6ff2bfdc82266ff1f2401/2:3/w_2560%2Cc_limit/series_2019_netflix_hbo_juego_de_tronos_modern_family_stranger_things_638146771.jpg" alt="ChatacterPhoto" />
    </div>

    <div className="InfoNombre">
<h1>JUANA LA LOCA</h1>
    </div>
</div>

</div>
<div className="descripcionEspecifica">
    <div className="InfoCasa">
    <h3>CASA</h3>
    <img height="300px"src="https://i.pinimg.com/originals/3b/a6/c6/3ba6c62072b44f68baaca0faff4d2782.png" alt="" />
    </div>
    <div className="InfoAlianza">
    <h3>ALIANZAS</h3>
    <ul>
        <p>blablabla</p>
        <p>blablabla</p>
        <p>blablabla</p>
        <p>blablabla</p>
    </ul>
    </div>
    <div className="InfoApariciones">
    <h3>APARICIONES</h3>
        <ul>
            <p>blablabla</p>
            <p>blablabla</p>
            <p>blablabla</p>
            <p>blablabla</p>
        </ul>
    </div>
    <div className="InfoPadre">
        <h3>PADRE</h3>
        <ul>
            <p>blablabla</p>
        </ul>
    </div>
    <div className="InfoDescendiente">
        <h3>DESCENDIENTES</h3>
            <ul>
                <p>blablabla</p>
                <p>blablabla</p>
                <p>blablabla</p>
                <p>blablabla</p>
            </ul>
    </div>
    <div className="InfoTitulos">
        <h3>TITULOS</h3>
            <ul>
            <p>blablabla</p>
            <p>blablabla</p>
            <p>blablabla</p>
            <p>blablabla</p>
            </ul>
    </div>
</div>
</section>
}