import './contacts.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacts(){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ij1unw', 'template_hyhqoqi', form.current, 'SALXl6LLuoJ-7ia8a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    return(
        <div className='contacts' id='Contacts'>
            <div className='lcontacts'>
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur blur2" style={{background:"rgb(238 210 255)"}}></div>
            </div>
            <div className='rcontacts' >
                <form ref={form} className='contform' onSubmit={sendEmail}>
                    <input type='text' name='user_name' className='user' placeholder='Name'></input>
                    <input type='email' name='user_email' className='user' placeholder='Email'></input>
                    <input type='text' name='message' className='user' placeholder='Message'></input>
                    {/* <button className='button s-button' >Send</button> */}
                    <input type="submit" value="Send" className="button" ></input>
                </form>
            <div className="blur blur1" style={{background:"#C1F5FF"}}/>
            </div>
        </div>
    )
}


export default Contacts