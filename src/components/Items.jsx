import '../components/Items.css'

function Items(props) {
    return (
        <div className='containeri'>
            <div className='item-1'>
                <img src={props.image} alt="" />
            </div>
            <div className='item-2'>
            <h2 >{props.title}</h2>
            <p>{props.description}</p>
            </div>
        </div>


    );
} export default Items