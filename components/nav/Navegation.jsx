import { motion } from "framer-motion";
import  MenuItem  from "./MenuItem"

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2},
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1},
    },
};


function Navegation () {
    
    return (
        <motion.ul className="ul-navegation" variants={variants}>
                {itemIds.map((i) => (
                    <MenuItem i={i} key={i}  />
                ))}
            </motion.ul>
    )
}
const itemIds=[0,1,2,3,4]

/* const itemIds = [{
    nombre: "inicio",
    id: 1
},
{
    nombre: "seccion",
    id: 2
},
{
    nombre: "escala",
    id: 3
}]; */

export default Navegation;

