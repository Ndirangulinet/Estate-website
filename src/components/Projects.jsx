import React, { useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import {motion} from "framer-motion"

const Projects = () => {

const [current, setCurrent] = React.useState(0);
const [cardsToShow, setCardsToShow] = React.useState(1);

useEffect(() => {
  const updateCardsToShow = () => {
if(window.innerWidth >= 1024){
  setCardsToShow(projectsData.length);
}else {
  setCardsToShow(1)
}
};
  updateCardsToShow();


window.addEventListener('resize', updateCardsToShow);
return () => {
  window.removeEventListener('resize', updateCardsToShow);
  }
}, [])


const nextproject = () => {
  setCurrent((prev) => (prev + 1) % projectsData.length);
} 
const prevproject = () => {
  setCurrent((prev) => (prev === 0 ?projectsData.length - 1 : prev - 1));
}


  return (
    <motion.div 
    initial={ {opacity:0, x:-200}}
    transition={ {duration: 1}}
    whileInView={ {opacity:1, x:0}}
    viewport={ {once: true}}
    
  
    className='container mx-auto py-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects<span className='undeline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portforlio</p>

       {/*slider button */}
       <div className='flex justify-end items-center mb-8'>
        <button onClick={prevproject} className='p-3 bg-gray-200 rounded mr-2 ' aria-label='previous project'>
        <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextproject} className='p-3 bg-gray-200 rounded' aria-label='Next project'>
        <img src={assets.right_arrow} alt="Next" />
        </button>
       </div>

       {/*project slider container */}
       <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform: `translateX(-${current * (100 / cardsToShow)}%)`}}>
          {projectsData.map((project, index) => (<div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
<img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
<div className='absolute bottom-5 left-0 right-0 flex justify-cente '> 
<div className='inline-block bg-white px-4 py-2 shadow-md w-3/4'>
<h2 className='text-xl font-semibold text-gray-800'>
  {project.title}
  <p className='text-sm text-gray-500'>
    {project.price} <span className='px-1'> | </span>{project.location}

  </p>
</h2>

</div>
</div>

          </div> ))}  
        </div>
       </div>
    </motion.div>
  )
}

export default Projects
