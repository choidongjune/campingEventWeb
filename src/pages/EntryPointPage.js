import React, { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import {Nav, Container, Form, Button} from 'react-bootstrap';

import MainPage from './MainPage';
import ContentsPage from './ContentsPage';
import ApplicantPage from './ApplicantPage';

const App = () => {
    // const [position, setPosition] = useState(0);
    // const onScroll = () => {
    //     setPosition(window.scrollY);
    // }
    // useEffect(()=>{
    //     window.addEventListener('scroll', onScroll);
    //     return ()=>{
    //         window.removeEventListener('scroll', onScroll);
    //     }
    // },[]);
    return (
        <ReactPageScroller>
            <MainPage/>
            <ContentsPage/>
            <ApplicantPage/>
        </ReactPageScroller>
    );

}

export default App;