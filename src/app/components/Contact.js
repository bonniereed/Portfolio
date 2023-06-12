import github from 'src/app/images/github.png'
import email from 'src/app/images/envelope.png'
import telephone from 'src/app/images/mobile.png'
import resume from 'src/app/images/resume.png'
import linkedIn from 'src/app/images/linkedin.png'


function Contact() {
    return (
        <div>
          
            <a href="https://github.com/bonniereed" target="_blank"><Image source={require({github})} /></a>
            <a href="https://www.linkedin.com/in/bonniejeanreed/" target="_blank"><img src={linkedIn} alt="linkedin"/></a>
            <a href="https://docs.google.com/document/d/125iDwRCvodsc1wb3oqWg6LH2N_irk4T0O9enKizgIEg/edit?usp=sharing" target="_blank"><img class="resume" src={resume} alt="resume"/></a>
            <a href="mailto:“bonniejeanreed@gmail.com" target="_blank"><img src={email} alt="email"/></a>
            <a href="sms:(+1)(469-418-1554)"><img src={telephone} alt="sms"/></a>
        </div>
      
    );
  }
  
  export default Contact;