'use client'
import React, { useState } from 'react';
import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';

function Helm() {
    let [content, setContent] = useState(About);

    return(
        <div>
            <ul className="nav-btns">
                <button onClick={() => setContent(About)} className="nav-el">About Me</button>
                {/* <button onClick={() => setContent(Projects)} className="nav-el">Projects</button>
                <button onClick={() => setContent(Contact)} className="nav-el">Contact Me</button> */}
            </ul>
            <main>{content}</main>
        </div>
    )
}

export default Helm;