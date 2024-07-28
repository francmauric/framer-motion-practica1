import {motion} from "framer-motion";

function Body3 () {
    
    return(
        <motion.div
      className="w-72 h-72 bg-blue-500"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <p className="text-white text-center mt-10">Hello!</p>
    </motion.div>
    )
}

export default Body3;