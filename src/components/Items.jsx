import '../components/Items.css'

function Items(props) {
    return (
        <div className='card2'>
            <div className='img-wraper'>
                <img className='imgja' src={props.image} alt="image loading..." />
            </div>
            <h2 >{props.title}</h2>
            <p>{props.description}</p>
        </div>


    );
} export default Items