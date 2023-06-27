
import Image from 'next/image'
import email from 'src/img/envelope.png'
import telephone from 'src/img/mobile.png'
import resume from 'src/img/resume.png'
import linkedIn from 'src/img/linkedin.png'
import github from 'src/img/github.png'


function Contact() {
    return (

        
        <div>
          
            <a href="https://github.com/bonniereed" target="_blank"><Image src={github}width={50}height={50}alt="github icon" /></a>
            <a href="https://www.linkedin.com/in/bonniejeanreed/" target="_blank"><Image src={linkedIn} width={50}height={50}alt="linkedin"/></a>
            <a href="https://docs.google.com/document/d/125iDwRCvodsc1wb3oqWg6LH2N_irk4T0O9enKizgIEg/edit?usp=sharing" download><img class="resume" src={resume} width={50}height={50} alt="resume"/></a>
            <a href="mailto:“bonniejeanreed@gmail.com" target="_blank"><Image src={email}width={50}height={50} alt="email"/></a>
            <a href="sms:(+1)(469-418-1554)"><Image src={telephone} width={50}height={50}alt="sms"/></a>
        </div>
      
    );
  }
  
  export default Contact;
  