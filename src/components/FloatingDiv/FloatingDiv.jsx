import './FloatingDiv.css'

function FloatingDiv(props){
    return(
        <div className="floatingDiv">
            <img src={props.img}></img>
            <span>{props.txt1}<br />{props.txt2}</span>
            
            
        </div>
    )
}

export default FloatingDiv