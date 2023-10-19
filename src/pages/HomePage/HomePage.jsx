import MenuInicio from "../../components/MenuInicio/MenuInicio";
import "./homepagestyle.css";

export default function HomePage () {

    

return <section className="home">
    <div className="menuidiomas">
        <img className="bandera" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bandera_Nacional_de_Espa%C3%B1a_sin_escudo.png/1200px-Bandera_Nacional_de_Espa%C3%B1a_sin_escudo.png" alt="spainflag" />
        <img className="bandera" src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-xl.png" alt="ukflag" />
    </div>
    <div className="hometitulo">
        <h1 className="hometitulo">Juego de tronos</h1>
    </div>
    <div className="homebotones">
        <MenuInicio/>
    </div>

</section>
}