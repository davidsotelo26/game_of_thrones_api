import SimpleBar from "simplebar-react"
import "./CharacterGallery.css"
import 'simplebar-react/dist/simplebar.min.css';

export default function CharacterGallery ({data}) {
    return (
    <div className="character-gallery">
       
    {data.map((character, index) => (<div className="esc-name" key={index}>
    <SimpleBar className="simplebar-react" style={{ maxHeight: 500 }}>
    <p className="characterage">{character.age}</p>
    
    <p className="charactername">{character.name}</p>
    
    <img className="characterphoto" src={`http://localhost:3000/${character.image}`} alt="personajes"/>
    </SimpleBar>
    </div>
    ))}
</div>
    )
}