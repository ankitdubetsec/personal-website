import './footer.css'
import wave from '../img/wavenew.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Leet from '@iconscout/react-unicons/icons/uil-twitter'
function Footer (){
    return (

        <footer className='footer'>
            
        <svg viewBox="0 -20 700 110" width="100%" height="210" preserveAspectRatio="none">
          <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#9BB8CD" />
          <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#7B66FF" />
        </svg>
        <div className='footercontent'>
                <span>Ankitdube164@gmail.com</span>
                <div className='f-icons'>
                    <Instagram  color='white' size='2rem'/>
                    <Facebook  color='white' size='2rem'/>
                    <Git  color='white' size='2rem'/>
                    <Leet  color='white' size='2rem'/>

                </div>

            </div>
      </footer>
    )
}

export default Footer;
