import './service.css'
import heartimg from '../img/heartemoji.png'
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
import Card from '../components/cards/Card'
import resume from '../img/Res_october.pdf'
function Service() {
    return (
        <div className="services" id='Skills'>
            <div className="leftservice">
                <span>My Aweosome</span>
                <span>Skills</span>
                <span>As a dedicated MERN (MongoDB, Express.js, React, Node.js) <br></br>stack developer, I bring a proven track record of designing<br></br> and implementing robust and scalable web applications. </span><br></br>
            <a href={resume} download>
            <button className='button s-button'>Resume</button>
            </a>
            <div className="blur blur1" style={{background:"#C1F5FF", top: "200px",left: "-260px"}}/>
            </div>
            {/* style={{left:"8rem"}} */}
            <div className="rightservice" >
               <div style={{left:"14rem"}} className='cards1'>
                <Card
                  img={heartimg}
                  head={"Frontend"}
                  skills={"Html,Css,Javascript,Reactjs"}
                />
               </div>
               <div style={{left:"-4rem",top:"12rem"}} className='cards2'>
                <Card
                  img={Glasses}
                  head={"Backend"}
                  skills={"express,nodejs"}
                />
               </div>
               <div style={{left:"14rem",top:"19rem"}} className='cards3'>
                <Card
                  img={Humble}
                  head={"Databases"}
                  skills={"MongoDb,MySql"}
                />
               </div>
               <div className="blur blur2" style={{background:"rgb(238 210 255)"}}>

        </div>
            </div>

        </div>

    )
}

export default Service