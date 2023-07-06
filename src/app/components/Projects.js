import marketplace from 'src/img/marketplace.png'
import mordle from 'src/img/mordle.jpeg'
import Image from 'next/image'
import Link from 'next/link'
function Projects() {
    return (
        <ul style={{listStyleType:'none', margin:'5em', padding:'5em', display:'flex', justifyContent:'space-around', margin:0, padding:0}}>
        <li  style={{color:'inherit', textDecoration:'none'}}>
        <Link href="https://github.com/bonniereed/MarketplaceExtension/tree/main" rel="noopener noreferrer" target="_blank"><Image src={marketplace} width={200}height={200}alt="Marketplace chrome extension" /></Link></li>
        <li><Link href="https://github.com/bonniereed/Mordle" rel="noopener noreferrer" target="_blank"><Image src={mordle} width={200}height={200}alt="Wordle Clone" /></Link></li>
        {/* <a onClick={() => setContent(Projects)} >Projects<Link href="https://google.com" rel="noopener noreferrer" target="_blank"> Google </Link></a>
        <a onClick={() => setContent(Skills)} >Skills<Link href="https://google.com" rel="noopener noreferrer" target="_blank"> Google </Link></a> */}
    </ul>
      
    );
  }
  
  export default Projects;