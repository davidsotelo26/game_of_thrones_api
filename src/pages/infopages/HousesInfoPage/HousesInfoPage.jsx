import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './HouseInfoPages.css'; 

export default function HousesInfoPage () {
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
        <div className='menuderecha'>
            <Link to='/'>
            <img className='casa' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697845997/Group_syd31k.png" alt="bandera"></img>
            </Link>
            <img className='banderitaES' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/spain_1_pmsxsq.png" alt="bandera"></img>
            <img className='banderitaEN' src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/united-kingdom_1_hyhwxc.png" alt="bandera"></img>
        </div>
       </div>
       <div className='main'>
        <img className='houseflag' alt="house flag" src=""></img>
        <h3>placeholder</h3>
       </div>
       <div className='footer'>
        <div className='cositas'>
            <h4>LEMA</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>SEDE</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>REGIÓN</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>ALIANZAS</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>RELIGIONES</h4>
            <ul className='smallData'></ul>
        </div>
        <div className='cositas'>
            <h4>FUNDACIÓN</h4>
            <ul className='smallData'></ul>
        </div>
       </div>
        </body>
    )
}