import '../components/Cards.css'

function Cards(props) {

    return (

        <div className="card1">
            <h3>{props.version}</h3>
            <div className='info-container'>
                <div style={{ backgroundcolor: props.color }} className='ngjyra'>NEW</div>
                <img className='second-image' src={props.image} alt="image loading..." />
                <h2>{props.name}</h2>
            </div>
            <p>{props.description}</p>
            <button className="card-button">Download</button>
        </div>

    );
}
export default Cards