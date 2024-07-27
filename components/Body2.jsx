import {motion} from "framer-motion"
import "../style/body2.css"

function Body2 () {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: 10, opacity: 0 } }

    return (
        <motion.div 
            initial={ {color: '#ff0000'} } 
            transition={{duration:3}} 
            animate={{ 
                x:100, 
                color:'#000',
                scale: [2,1],
                rotate: [90,0],
                borderRadius:["100%", "0%"] }} 
            className="box border-2 border-rose-900 w-48"
            >
            <motion.h1 className="text-4xl font-bold ">body 2</motion.h1>
            <motion.ul animate="" className="text-2xl m-4 text-center" variants={list}>
                 <motion.li variants={item}>item 1</motion.li>
                 <motion.li variants={item}>item 2</motion.li>
                 <motion.li variants={item}>item 3</motion.li>
                 <div onClick={() => animate(".boxes", {opacity:0 })} >button</div>
            </motion.ul>
        </motion.div>
    )
}

export default Body2;