import '../components/Cards.css'

function Cards (props){
    return(
        <div className="card-container">
            <div className="card">
                <h3>{props.version}</h3>            
                <img src={props.image} alt="" />
                <button>NEW</button>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <button className="butoni">Download</button>
            </div>
        </div>
    );
}
export default Cards