import React from 'react'
import { useViewportScroll,useTransform,motion} from "framer-motion";

interface Iprops{
    text: String
}
const Heading = (props : Iprops) => {
    const { scrollYProgress } = useViewportScroll()
const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
   
  return (
    <motion.div
    style={{ scale }}
  >

    <div className='flex justify-center items-center  text-4xl font-semibold mt-10'>
    <div className='h-10 w-2 bg-slate-600 mr-4'>

</div>
      <p>{props.text}</p>
      <div className='h-10 w-2 bg-slate-600 ml-4'>

      </div>
      </div>
      </motion.div>
  )
}


export default Heading