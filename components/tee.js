import AOS  from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const MoreAbout = () => {
  useEffect(()=>{
    AOS.init({duration: 1500})
  },[])
    return ( 
       <div data-aos="fade-left">
         <p>
          I&apos;m vast with Javascript, Node, TypeScript, React.JS, Next.JS. I also deal with
         Project Management. Emmanuel delivers exceptional outcomes in 
         remote work environments. Possessing a remarkable range of technical 
         skills and genuine enthusiasm for web development, Emmanuel is a highly capable professional with a strong commitment to professionalism with strong work ethics, adaptability, 
         and excellent communication. 
         You can always connect with me via my social handles. 
          </p>
       </div>
        
     );
}
 
export default MoreAbout;