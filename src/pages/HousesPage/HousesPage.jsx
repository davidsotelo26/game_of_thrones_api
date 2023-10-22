import axios from "axios";
import { useEffect, useState } from "react";
import HouseGallery from "../../components/Gallery/HouseGallery";
import "./HousePage.css"
import SearchBar from "../../components/SearchBar/SearchBar";
import React from "react";
import MenuInicio from "../../components/MenuInicio/MenuInicio";
import MenuIdiomas from "../../components/MenuIdiomas copy/MenuIdiomas";

export default function HousesPage () {


const [houses, setHouses] = useState([]);
const [housesFilter, setHousesFilter] = useState([]);

useEffect(()=>{
    const getHouses = async () => {
        const {data} = await axios('http://localhost:3000/houses')
        setHouses(data);
        setHousesFilter(data);
    }
    getHouses();
},[])
const handleSearch = (filterText) => {
    const filteredHouses = houses.filter((house) =>house.name.toLowerCase().includes(filterText.toLowerCase()));
    setHousesFilter(filteredHouses);
}


return (
    <body className="body">
        <nav className="navbar">
            <SearchBar onSearch={handleSearch}/>
            <MenuIdiomas/>
        </nav>
        <div className="scrollable-container">
            <HouseGallery data={housesFilter}/>
        </div>
        <footer className="footer">
            <div className="homebotones">
                <MenuInicio/>
            </div>
        </footer>
    </body>
)
}