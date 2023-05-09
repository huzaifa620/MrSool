import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Context } from './Context';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function App() {
  const { time, setTime, timeChange, isOpen, setIsOpen } = useContext(Context)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col w-1/5 space-y-14 relative"
    >
      <motion.button className="border rounded-[10px] p-2 font-bold cursor-pointer w-full text-left flex justify-between items-center px-4 bg-slate-300 shadow-md" whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
        {time}

        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>

      </motion.button>
      
      <motion.ul className="bg-slate-300 p-2 flex flex-col space-y-2 text-center mt-12 absolute z-10 w-full"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li className="text-base lowercase border-b-2 border-white" variants={itemVariants}> <button onClick={timeChange}> 08am - 10am </button> </motion.li>
        <motion.li className="text-base lowercase border-b-2 border-white" variants={itemVariants}> <button onClick={timeChange}> 02pm - 04pm </button> </motion.li>
        <motion.li className="text-base lowercase border-b-2 border-white" variants={itemVariants}> <button onClick={timeChange}> 09pm - 11pm </button> </motion.li>
      </motion.ul>

    </motion.nav>
  );
}