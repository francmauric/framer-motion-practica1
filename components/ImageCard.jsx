import { motion } from "framer-motion";



function ImageCard ({ src, alt }) {

    return(
        <motion.div
            className="w-64 h-64 overflow-hidden rounded-lg shadow-lg shadow-green-700 cursor-pointer"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            initial={{ opacity:1, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.2}} >
            
            <img src={src} alt={alt}  className="w-full h-full object-cover"/>
        </motion.div>
    )
}

export default ImageCard; 