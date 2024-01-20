import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import leetcode from "../../img/leetcode.png";
import './Intro.css'
import { Link } from 'react-scroll'

// import {motion} from 'framer-motion'
function Intro(){
    const transition={duration:2,type:'spring'}
    return(
 <div className="intro">
    <div className="i-left">
        <div className="i-name">
            <span>Hi! I Am</span>
            <span>Ankit Dubey</span>
            <span>T.E I.T engineer,currently studying in Thadomal shahani engineering college.</span>
        </div>
        <Link spy={true} to="Contacts" > <button className="button i-button">Hire me</button></Link>
        <div className="i-icons">
       <a href="http://www.github.com/ankitdubetsec"><img src={github}  alt=''></img></a>
       <a href="https://www.linkedin.com/in/ankit-dubey-8975681ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOY53a99eShys9cywdHVXwg%3D%3D"><img src={linkedin}  alt='' /></a>
       <a href="https://www.instagram.com/ankitdube164/"><img src={instagram}  alt='' /></a>
       <a href="https://leetcode.com/ankitdubetsec/"><img src={leetcode}  alt='' className="leet"/></a>
        </div>
       
    </div>
    <div className="i-right">
    <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <img src={glassesimoji} className="imoji"></img>
        <div style={{top:'-4%',left:'65%'}} className="web">
     <FloatingDiv 
     img={crown} 
     txt1="Web"
     txt2="developer"
     />
     </div>

     {/* blur divs */}
   
        <div className="blur" style={{background:"rgb(238 210 255)"}}>

        </div>

        <div className="blur" style={{background:"#C1F5FF", top: "200px",left: "-150px"}}>

</div>
    

     <div style={{top:'78%',left:'2%'}} className="web2">
     <FloatingDiv 
     img={thumbup} 
     txt1="Competitive"
     txt2="programmer"
     />
     </div>
    </div>
 </div>
    )
}
export default Intro