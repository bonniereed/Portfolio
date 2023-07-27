'use client'
import React, { useState } from 'react';
import About from './pages/About';
import Projects from './Projects';
import Skills from './pages/Skills';
import { motion } from "framer-motion";

function Helm() {
    let [content, setContent] = useState(About);

    return(
     
        <nav className="navbar">
        <div clasName="container-fluid">
        <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
            <ul style={{listStyleType:'none', display:'flex',justifyContent:'space-around', margin:0, paddingRight:'.5em'}}>
                <li  style={{color:'inherit', textDecoration:'none'}}>
                <a  onClick={() => setContent(About)} >About Me</a></li>
                <a onClick={() => setContent(Projects)} >Projects</a>
                <a onClick={() => setContent(Skills)} >Skills</a>
            </ul>
            </motion.div>
            <main>{content}</main>
          </div>
        </nav>
  
    )
}

export default Helm;