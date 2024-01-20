import './Navbar.css'

import Toggle from '../toggle/Toggle'
import Experience from '../../experience/Experience'
import { Link } from 'react-scroll'

function Navbar(props) {

    return (
        <div className="n-wrapper" id='Navbar'>
         <div className="n-left">
            <div className="n-name">
                Ankit Dubey
            </div>
           <Toggle dark={props.dark} setdark={props.setdark}/>
         </div>
         <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to="Navbar" ><li className='ll'>Home</li></Link>
                    <Link spy={true} to="Skills" smooth={true} activeClass='activeClass'><li className='ll'>Skills</li></Link>
                    <Link spy={true} to="Highlights" smooth={true} activeClass='activeClass'><li className='ll'>Highlights</li></Link>
                    <Link spy={true} to="Projects" smooth={true} activeClass='activeClass'><li className='ll'>Projects</li></Link>
                    
                    
                    
                    {/* <li>Portfolio</li>
                    <li>Testimonials</li> */}
                </ul>
            </div>
            <Link spy={true} to="Contacts" > <button className="button n-button">Contact</button></Link>
         </div>
        </div>
    )
}

export default Navbar