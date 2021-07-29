import React, { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { Nav, Container, Form, Button } from 'react-bootstrap';

import MainPage from './MainPage';
import ContentsPage from './ContentsPage';
import ApplicantPage from './ApplicantPage';

const App = () => {
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 765) {
            setMobile(true);
            console.log('mobile');
        }
    })
    if (isMobile) {
        return (
            <>
                <MainPage />
                <ContentsPage />
                <ApplicantPage />
            </>
        );
    } else {
        return (
            <ReactPageScroller>
                <MainPage />
                <ContentsPage />
                <ApplicantPage />
            </ReactPageScroller>
        );
    }


}

export default App;