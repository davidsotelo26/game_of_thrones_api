import React, { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './HouseInfoPages.css'; 
import { withTranslation } from 'react-i18next';
import i18n from '../../../components/Translate/Translate';
import MenuIdiomas from '../../../components/MenuIdiomas/MenuIdiomas';

function HousesInfoPage ({t}) {
    const {id} = useParams(); 

    return(
        <body>
        <div className='header'>
        <div className='volver'>
            <Link to='/houses' className='volveruwu'>
            <img className='flechita' src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697845997/Vector_jvcokm.png' alt='flechita'></img>
            <p>Volver</p>
            </Link>
        </div>
        <MenuIdiomas/>
       </div>
       <div className='main'>
        <img className='houseflag' alt="house flag" src=""></img>
        <h3 className='houseName'>placeholder</h3>
       </div>
       <div className='footer'>
        <div className='cositas'>
            <h4>{t('sede')}</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>REGION</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>{t('alianzas')}</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>{t('religiones')}</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>{t('fundacion')}</h4>
            <ul className='smallData'></ul>
        </div>
       </div>
        </body>
    )
}

export default withTranslation()(HousesInfoPage);