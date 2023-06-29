import Image from 'next/image'
import selfie from 'src/img/sketchselfie.png'
function About() {
  return (
      <div>
          <h2 className="#">Bonnie Reed</h2>
          <p><Image src={selfie}style={{width:'25em', height:'25em', borderRadius:'.25em', padding:'3em'}}alt="picture of Bonnie"></Image>
          Experienced Systems Administrator with a demonstrated history of scripting and automating solutions for Mac and Windows support and reporting.

Created Brevity, an internal application for Support Engineers to easily access all tools in one place; Reducing Average Call Handle Time.

I'm always looking to grow my personal and professional network. Feel free to connect via LinkedIn or contact me directly at BonnieJeanReed@gmail.com
          </p>
          <ul>
              <li className="#">Email: bonniejeanreed@gmail.com</li>
              <li className="#">Telephone: 469-418-1554</li>
          </ul>
      </div>
  );
}

export default About;