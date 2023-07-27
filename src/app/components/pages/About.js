import Image from 'next/image'
import selfie from 'src/img/sketchselfie.png'
function About() {
  return (
      <div><div style={{padding:'5em'}}>
        
        <h2 style={{fontFamily:'fantasy', fontSize:'1em'}}>          <Image src={selfie}style={{width:'10em', height:'10em', borderRadius:'.25em', padding:'1em', borderRadius:'5em'}}alt="picture of Bonnie"></Image>Hi, my name is</h2>
          <h1 style={{fontFamily:'fantasy', fontSize:'3em'}}>Bonnie Reed</h1>
          <p style={{padding:'.15em', fontFamily:'Montserrat', fontSize:'1em'}}>
          With seven years of technical experience under my belt, I bring a wealth of expertise and a strong foundation in various technical domains. What sets me apart is my exceptional proficiency in soft skills, enabling me to effectively bridge the gap between complex technologies and non-technical individuals. I possess the unique ability to translate intricate technical concepts into clear and concise language, ensuring smooth communication and understanding across teams and stakeholders. By leveraging my technical expertise and adeptness in soft skills, I am confident in my ability to contribute significantly to your organization and facilitate effective collaboration between technical and non-technical stakeholders.
          </p>
          </div>
      </div>
  );
}

export default About;