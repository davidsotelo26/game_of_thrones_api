import MenuInicio from "../../components/MenuInicio/MenuInicio";
import "./homepagestyle.css";

export default function HomePage () {

    

return <section className="home">
    <div className="menuidiomas">
        <img className="bandera" src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/spain_1_pmsxsq.png" alt="spainflag" />
        <img className="bandera" src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697833408/united-kingdom_1_hyhwxc.png" alt="ukflag" />
    </div>
    <div className="hometitulo">
        <h1 className="hometitulo">Juego de tronos</h1>
    </div>
    <div className="homebotones">
        <MenuInicio/>
    </div>

</section>
}