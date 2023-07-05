import Image from 'next/image'
import selfie from 'src/img/sketchselfie.png'
function About() {
  return (
      <div><div style={{padding:'5em'}}>
        <h2 style={{fontFamily:'fantasy', fontSize:'1em'}}>Hi, my name is</h2>
          <h1 style={{fontFamily:'fantasy', fontSize:'3em'}}>Bonnie Reed</h1>
          <Image src={selfie}style={{width:'10em', height:'10em', borderRadius:'.25em', padding:'1em'}}alt="picture of Bonnie"></Image>
          <p style={{padding:'.15em', fontFamily:'Montserrat', fontSize:'1em'}}>
          Experienced Systems Administrator with a demonstrated history of scripting and automating solutions for Mac and Windows support and reporting.

Created Brevity, an internal application for Support Engineers to easily access all tools in one place; Reducing Average Call Handle Time.

I'm always looking to grow my personal and professional network. Feel free to connect via LinkedIn or contact me directly at BonnieJeanReed@gmail.com
          </p>
          </div>
      </div>
  );
}

export default About;