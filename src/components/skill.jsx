import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import aspnet from '../assets/aspnet.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Vue from '../assets/vue.png';
import php from '../assets/php.webp';
import Figma from '../assets/figma.webp';
import Mongo from '../assets/mongo.png';

const Skill = ( {skill} ) => {
   let srcImg = "";
   switch (skill.logo) {
      case "HTML":
         srcImg =  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
         break;
      case "CSS":
         srcImg =  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
         break;
      case "AWS":
         srcImg =  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
         break; 
      default:
         srcImg =  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />    

   }
   return (
       
      <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
        
         {srcImg}
         <p className='my-4'>{skill.name}</p>
         
      </div>
   )
}

export default Skill;