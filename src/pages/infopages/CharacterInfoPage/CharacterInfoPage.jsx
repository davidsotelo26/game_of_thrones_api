import "./CharacterInfoPageStyle.css"
import { Link } from 'react-router-dom';
import MenuIdiomas from "../../../components/MenuIdiomas/MenuIdiomas";
import { withTranslation } from 'react-i18next';

function CharacterInfoPage ({t}) {

return <section className="FichaPersonaje">
<div className='header'>
        <div className='volver'>
            <Link to='/characters' className='volveruwu'>
            <img className='flechita' src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697845997/Vector_jvcokm.png' alt='flechita'></img>
            <p>Volver</p>
            </Link>
        </div>
        <MenuIdiomas/>
       </div>

<div className="descripcionGeneral">
<div className="InfoGeneral">
    <div className="Infofoto">
        <img height="320px" src="https://media.vogue.es/photos/5cc6ff2bfdc82266ff1f2401/2:3/w_2560%2Cc_limit/series_2019_netflix_hbo_juego_de_tronos_modern_family_stranger_things_638146771.jpg" alt="ChatacterPhoto" />
    </div>

    <div className="InfoNombre">
<h1 className="nombre">JUANA LA LOCA</h1>
    </div>
</div>

</div>
<div className="descripcionEspecifica">
    <div className="InfoA">
    <h3>{t('casa')}</h3>
    <img height="191.6px" width='160px' src="https://i.pinimg.com/originals/3b/a6/c6/3ba6c62072b44f68baaca0faff4d2782.png" alt="casa" />
    </div>
    <div className="InfoA">
    <h3>{t('alianzas')}</h3>
    <ul>
        <p>blablabla</p>
        <p>blablabla</p>
        <p>blablabla</p>
        <p>blablabla</p>
    </ul>
    </div>
    <div className="InfoA">
    <h3>{t('apariciones')}</h3>
        <ul>
            <p>blablabla</p>
            <p>blablabla</p>
            <p>blablabla</p>
            <p>blablabla</p>
        </ul>
    </div>
    <div className="InfoA">
        <h3>{t('padres')}</h3>
        <ul>
            <p>blablabla</p>
        </ul>
    </div>
    <div className="InfoA">
        <h3>{t('hermanos')}</h3>
            <ul>
                <p>blablabla</p>
                <p>blablabla</p>
                <p>blablabla</p>
                <p>blablabla</p>
            </ul>
    </div>
    <div className="InfoA">
        <h3>{t('titulos')}</h3>
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

export default withTranslation()(CharacterInfoPage);
