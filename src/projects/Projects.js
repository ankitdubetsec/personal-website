import './projects.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Sidebar from "../img/sidebar.png";
import Ecommerce from "../img/ecom.png";
import Memegenerator from "../img/memegenerator.png";
import Notes from "../img/notes.png";
import HOC from "../img/hoc.png";
import MusicApp from "../img/musicapp.png";
import Scholorship from "../img/scholorship.png";
import Farmeazy from "../img/farmeazy.png";



function Projects() {
    const prj=[
        {
            img:Scholorship
        },
        {
            img:Notes
        },
        {
            img:Memegenerator
        },
        {
            img:Farmeazy
        }
    ]
    const slides=prj.map((element,index)=>{
        return(
            <SwiperSlide key={index}>
                <img src={element.img}></img>
            </SwiperSlide>

        )
    })
    return (
    <div className='projects' id='Projects'>
        
            <span>My</span>
            <span>Projects</span>
       
        <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
            {slides}
        </Swiper>
    </div>
    );
  }
  
  export default Projects
  