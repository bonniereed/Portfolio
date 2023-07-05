'use client'
import React, { useState } from 'react';
import About from './pages/About';
import Projects from './Projects';
import Contact from './pages/Contact';

function Helm() {
    let [content, setContent] = useState(About);

    return(
        <nav className="navbar">
        <div clasName="container-fluid">
            <ul style={{listStyleType:'none', display:'flex', justifyContent:'space-around', margin:0, padding:0}}>
                <li  style={{color:'inherit', textDecoration:'none'}}>
                <a  onClick={() => setContent(About)} >About Me</a></li>
                <a onClick={() => setContent(Projects)} >Projects</a>
                <a onClick={() => setContent(Contact)} >Contact Me</a>
            </ul>
            <main>{content}</main>
            </div>
        </nav>
    )
}

export default Helm;