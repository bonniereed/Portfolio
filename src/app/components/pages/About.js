import Image from 'next/image'
import selfie from 'src/img/sketchselfie.png'
function About() {
  return (
      <div><div style={{padding:'5em'}}>
        
        <h2 style={{fontFamily:'fantasy', fontSize:'1em'}}>          <Image src={selfie}style={{width:'10em', height:'10em', borderRadius:'.25em', padding:'1em', borderRadius:'5em'}}alt="picture of Bonnie"></Image>Hi, my name is</h2>
          <h1 style={{fontFamily:'fantasy', fontSize:'3em'}}>Bonnie Reed</h1>
          <p style={{padding:'.15em', fontFamily:'Montserrat', fontSize:'1em'}}>Highly experienced Systems Administrator with a proven track record of scripting and automating solutions for Mac and Windows support and reporting. Developed the internal application, Brevity, to streamline access to essential tools, resulting in a projected reduction in Average Call Handle Time. </p><p style={{padding:'.35em', fontFamily:'Montserrat', fontSize:'1em'}}>With seven years of technical expertise, I possess a diverse skill set across various domains. I am dedicated to leveraging my technical proficiency and interpersonal abilities to contribute significantly to organizational success and foster a collaborative work environment. Excited about the opportunity to join a dynamic team and make a positive impact. Let's connect and explore how we can achieve greatness together! 🚀
          </p>
          </div>
      </div>
  );
}

export default About;