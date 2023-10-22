import { useEffect, useState } from "react";
import MenuInicio from "../../components/MenuInicio/MenuInicio";
import axios from "axios";
import CharacterGallery from "../../components/Gallery/CharacterGallery";
import MenuIdiomas from "../../components/MenuIdiomas/MenuIdiomas";
import "./CronologyPage.css"

export default function CronologyPage () {


    const [characters, setCharacters] = useState([]);
    
    useEffect(()=>{
        const getCharacters = async () => {
            const {data} = await axios('http://localhost:3000/Characters')
            setCharacters(data);
        }
        getCharacters();
    },[])

        return <>

<body className="Cronologybody">
        <nav class="Cronologynavbar">
            <MenuIdiomas/>
        </nav>
        
        <div className="CronologyMain">
            
            <CharacterGallery data={characters}/>
          
        </div>
        
        <footer>
                <MenuInicio/>
        </footer>
    </body>
        
        
        </> }
