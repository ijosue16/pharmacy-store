import React, { useState } from "react";
import { motion } from "framer-motion"

const Framer=()=>{
    const [open,setOpen]=useState(false);
    return(
        <>
       
        <div className="bg-white h-full w-ful flex justify-center items-center">
        <button className=" bg-blue-100 border rounded p-3" onClick={()=>setOpen(!open)}>open sha!!</button>
        <motion.div animate={{x:open?0:100,opacity:open? 1:0,visibility:open? "visible":"hidden"}} initial={false}  transition={{ ease: "easeOut", duration: 0.7}} className={`bg-amber-400 border w-20 h-20 ${open?'block':'hidden'}`}></motion.div>
        </div>
        </>
    )
}
export default Framer; 