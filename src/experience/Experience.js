import './experience.css'

function Experience(){
    return(
        <div className="experience" id='Highlights'> 
        <div className="achievement">
            <div className="circle">15+</div>
            <span>projects</span>
            <span>on github</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{left:"40px"}}>100+</div>
            <span>problems solved</span>
            <span>on leetcode</span>
        </div>
        <div className="achievement">
            <div className="circle">8.82</div>
            <span>Average</span>
            <span>cgpa</span>
        </div>
        <div className="achievement">
            <div className="circle" style={{left:"30px"}}>3</div>
            <span>programming</span>
            <span>languages</span>
        </div>

        </div>
    )
}

export default Experience