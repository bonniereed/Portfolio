'use client'
import React, { useState } from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Helm() {
    let [content, setContent] = useState(About);

    return(
        <nav class="navbar">
        <div class="container-fluid">
            <ul>
                <li>
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