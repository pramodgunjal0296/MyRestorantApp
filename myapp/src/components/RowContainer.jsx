import { motion } from 'framer-motion'
import React,{useEffect,useRef} from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import NotFound from '../img/NotFound.svg'

const RowContainer = ({flag,data,scrollValue}) => {
     console.log(data);
     const rowContainer= useRef(0)
     useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
     }, [scrollValue])
  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center justify-between gap-3 my-12 scroll-smooth
    ${flag
         ? 'overflow-x-scroll scrollbar-none'
         :'overflow-x-hidden flex-wrap justify-center'
        }`}
        >{
        data ? (data.map(item => (    
        <div 
         key={item.id}
        className='w-300 h-[250px] min-w-[275px] flex items-center flex-col 
        md:min-w-[300px] md:w-300
         bg-cardOverlay rounded-lg my-12 py-2 px-4 backdrop-blur-lg hover:drop-shadow-lg
         justify-evenly relative'>
        <div
        className='w-full flex  items-center justify-between'>
            <motion.div 
             whileHover={{scale:1.2}}
             className='w-40 h-40 -mt-8  drop-shadow-2xl'
             >
            <img src={item?.imageURL} 
            alt=""
            className='w-full h-full object-contain'
            />
            </motion.div>
            <motion.div
            whileTap={{scale:0.75}}
            className='w-8 h-8 rounded-full bg-red-600 flex items-center
            justify-center cursor-pointer hover:shadow-md -mt-8'>
                <MdShoppingBasket className='text-white'/>
            </motion.div>
           </div>
           <div
           className='w-full flex flex-col items-end justify-end -mt-8'>
            <p className='text-textColor font-semibold text-base md:text-lg'>
                {item?.title} </p>
                <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
                <div className='flex items-center '>
                    <p className='text-lg text-headingColor font-semibold'>
                        <span className='text-sm text-red-500'>$</span>{item?.price}
                    </p>
                </div>
           </div>
        </div>
        ))
        ):(
        <div className='w-full h-40 flex items-center justify-center'>
            <img src={NotFound} alt="" className='h-420'/>
            <p>Items Not Available</p>
        </div>
        )}
        </div>
  )
}

export default RowContainer