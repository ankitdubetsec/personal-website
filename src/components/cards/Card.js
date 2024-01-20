import './Card.css'

function Card(props){
    return(
        <div className="cardds">
        <img className="imgg" src={props.img}></img>
        <span>{props.head}</span>
        <span>{props.skills}</span>
        <button className='cardbtn'>Learn more</button>
        </div>
    )
}
export default Card