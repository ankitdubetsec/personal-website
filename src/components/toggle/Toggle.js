import './toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
function Toggle(props){
    function clickk(e){
        props.setdark(!props.dark)
    }
    return(
        <div className='toggle' onClick={clickk}>
            <Sun />
            <Moon/>
            <div className='toggle-button'  style={props.dark?{left:"2px"}:{right:"2px"}}>

            </div>

        </div>
    )
}

export default Toggle