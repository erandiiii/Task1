import './TabCard.css'

function TabCard (props){
    return(
        <div className="tab-container">
            <div className="tab-box">
                <div><h1>{props.type}</h1></div>       
                <div><h3>{props.price}</h3></div>
                    <div><p>{props.description}</p></div>
                <div className='tab-buton'><button>Download</button></div>
            </div>
        </div>
    );
}
export default TabCard