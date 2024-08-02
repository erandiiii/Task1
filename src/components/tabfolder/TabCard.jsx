import './TabCard.css'


function TabCard (props){
    return(
        
            <div className="tab-box">
                <h1>{props.type}</h1>     
                <h3>{props.price}</h3>
                    <p>{props.description}</p>
                <div className='tab-buton'><button>Download</button></div>
            </div>
       
    );
}
export default TabCard