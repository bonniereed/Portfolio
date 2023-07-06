'use client'
import React, { useState } from 'react';
import About from './pages/About';
import Projects from './Projects';
import Skills from './pages/Skills';

function Helm() {
    let [content, setContent] = useState(About);

    return(
        <nav className="navbar">
        <div clasName="container-fluid">
            <ul style={{listStyleType:'none', display:'flex', justifyContent:'space-around', margin:0, padding:0}}>
                <li  style={{color:'inherit', textDecoration:'none'}}>
                <a  onClick={() => setContent(About)} >About Me</a></li>
                <a onClick={() => setContent(Projects)} >Projects</a>
                <a onClick={() => setContent(Skills)} >Skills</a>
            </ul>
            <main>{content}</main>
            </div>
        </nav>
    )
}

export default Helm;