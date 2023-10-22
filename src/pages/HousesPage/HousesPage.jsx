import axios from "axios";
import { useEffect, useState } from "react";
import HouseGallery from "../../components/Gallery/HouseGallery";
import "./HousePage.css"
// import SearchBar from "../../components/SearchBar/SearchBar";
import React from "react";
import MenuInicio from "../../components/MenuInicio/MenuInicio";

export default function HousesPage () {


const [houses, setHouses] = useState([]);
// const [housesFilter, setHousesFilter] = useState([]);

// const [name, setName] = useState("");
useEffect(()=>{
    const getHouses = async () => {
        const {data} = await axios.get(`http://localhost:3000/houses`)
        setHouses(data);
        // setHousesFilter(data);
    }
    getHouses();
},[])
// const handleSearch = (housesFilter) => {
//     const filtered = houses.filter((house)=>house.name.toLowerCase().includes(housesFilter.toLowerCase()));
//     setHousesFilter(filtered);
// }

// useEffect(() => {
//     filterHouses();
// },[])


return (
    <body className="body">
        <nav className="navbar">
        <div className="lupaybuscador">
//         <img className="lupa" src="data:image/webp;base64,UklGRl4BAABXRUJQVlA4WAoAAAAQAAAAFAAAFAAAQUxQSBIBAAANkHPb1rHXonds2zYqp7Nt21ab1qls27Zt49q2fcMXiYgJAABOX1dd0VtrzaugG5AFvNlzNw34GvWMKk/ibto4cEclcCw35JAsiu84EgDOjppeTDcEfiTIpH/0B2X3fn1qOiEecaCZ45g//B6A9Y9BOmfNwWazAJR3QHvNWPcQAMsPeu+FhT4AeGvwmJYCXgPAlpPQMR07LBLafZIKaQg6P3hO6NEseDhHVYkMEM99y1faWy4IIuX4OkWCo6SxLr2i6Zd6YWZ4p9Tg/ZeAo5jM5CQLSeBB1mBJeZTXfwJupz5w1RE6HHoN+PlVB/mdEYB7fUcfQPzv69fk5X9GQvfMx73bw+9GOAu0GTS/GS5CTdwAVlA4ICYAAADQAgCdASoVABUAPt1qrlEopiQiqAgBEBuJaQAAPaOgAP7xbjUAAA==" alt="lupa"></img>
//         <input className="buscador" type="text" placeholder="Buscar..."></input>
//         </div>
            {/* <SearchBar onSearch={handleSearch}/> */}
            <p>home</p>
            <p>banderitas</p>
        </nav>
        <div className="scrollable-container">
            <HouseGallery data={houses}/>
        </div>
        <footer className="footer">
            <div className="homebotones">
                <MenuInicio/>
            </div>
        </footer>
    </body>
)
}