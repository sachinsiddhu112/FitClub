import React, {useRef} from 'react'
import './Join.css';
import emailjs from '@emailjs/browser';
export default function Join() {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_aym4umv', 'template_ov8qnu8', form.current, 'kFKJDZpRaBFqJfc3L')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='Join-us'>
      <div className="left-j">
        <hr/>
        <div>
            <span className='stroke-text'>READY TO</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
            <input type="email"name='user_email' placeholder='Enter Your Email'/>
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  )
}
