import React, {useState} from 'react';
import {HiOutlineClock} from "react-icons/hi";
import {FiCheckCircle, FiCloud, FiArrowDownLeft} from "react-icons/fi";
import {BsThreeDotsVertical} from "react-icons/bs";
import Editor from '../components/Editor';

function EditorPage(props) {
return(
    <main className='editor-page'>
        <div className='status-bar'>
            <ul className='status-bar-left'>
              <li className='status-bar-item status-bar__priority'>
                <div className='text'>p</div>
                <div className='divider'></div>
              </li>
              <li className='status-bar-item status-bar__duration'>
                <HiOutlineClock style={{fontSize: '18px'}} />
                <span style={{marginLeft: '3px'}}>0min</span>
                <div className='divider'></div>
                </li>
              <li className='status-bar-item status-bar__speed'>
                <img src="/images/rabbit-icon.png" alt="speed icon"/>
                <div className='divider'></div>
              </li>
              <li className='status-bar-item status-bar__stat'>
                <FiArrowDownLeft style={{fontSize: '18px'}}/>
                <span style={{marginLeft: '3px'}}>0</span>
                <div className='divider'></div>
              </li>
            </ul>
            <div className='status-bar-right'>
              <FiCheckCircle style={{fontSize: '18px', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}/>
              <FiCloud style={{fontSize: '18px', color: 'green', paddingLeft: '0.5rem', paddingRight: '0.5rem'}}/>
              <BsThreeDotsVertical style={{fontSize: '18px', paddingLeft: '0.5rem', paddingRight: '0.5rem', color: '#000'}}/>
            </div>
        </div>
       
        <section className='content-section'>
         <h1 className='main-heading'>Front-end developer test project</h1>
         <div className='horizontal-divider'></div>
         <p className='description'>Your goal is to make a page that looks exactly like this one, and has the ability to create H1 test simply by typing / then 1, then typing text, and hitting enter.</p>
        </section>
        <Editor />
    </main>
)
}

export default EditorPage;
