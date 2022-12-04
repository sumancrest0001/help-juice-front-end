import React from 'react';
import Breadcrumbs from './Breadcrumb';
import {HiOutlineChevronDoubleRight} from "react-icons/hi";
import {BsBook} from "react-icons/bs";
import {BiLockOpenAlt} from "react-icons/bi";
import {BsChevronDown} from "react-icons/bs";

function Header () {

    const breadcrumbData = [{
        title: 'Main',
        url: null,
        active: true
    },
    {
        title: 'Getting Started',
        url: null,
        active: false
    },
    {
        title: 'Front-end developer test project',
        url: null,
        active: false
    }
];

return(
    <header className='header'>
        <div className='nav-left'>
            <HiOutlineChevronDoubleRight style={{fontSize: '18px'}} />
            <BsBook style={{fontSize: '18px', marginLeft: '2rem', color: "rgb(158, 160, 162)"}}/>
            <Breadcrumbs breadcrumbs={breadcrumbData} customStyles={{marginLeft: '1rem'}} />
        </div>
        <div className='nav-right'>
            <div className='nav-right-item'>
                <BiLockOpenAlt style={{fontSize: '18px'}}/>
                <span>Editing</span>
            </div>
            <span className='nav-divider'>|</span>
            <div className='nav-right-item nav-right-item--active'>
                <span>Publish Space</span>
                <BsChevronDown style={{fontSize: '14px',paddingLeft: '0.5rem'}}/>
            </div>
        </div>
    </header>
)
};

export default Header;
