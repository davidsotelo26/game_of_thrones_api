import { Link } from 'react-router-dom';
import "./MenuInicio.css" 
import { withTranslation } from 'react-i18next';

function MenuInicio ({t}) {
    return <div className="menuinicio">
        <Link className="boton" to="characters">{t('personajes')}</Link>
        <Link className="boton" to="houses">{t('casas')}</Link>
        <Link className="boton" to="cronology">{t('cronologia')}</Link>
    </div>
}

export default withTranslation()(MenuInicio)