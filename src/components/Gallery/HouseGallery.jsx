export default function HouseGallery ({data}) {
    return (
    <div className="houses-gallery">
    {data.map((item, index) => (<div className="esc-name" key={index}>
    <img className="houselogo" src={`http://localhost:3000/${item.image}`} alt="casas"/>
    <p className="housename">{item.name}</p>
    </div>
    ))}
</div>
    )
}