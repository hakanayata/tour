export default function Card ( item ) {
 
    return(
        <div className="cards">
            <div className="title">
                <h1>{item.title}</h1>
            </div>

            <img src={item.image} alt="destination image" />

            <div className="card-over">
                <p>
                   {item.desc}
                </p>
            </div>
        </div>
    )
}