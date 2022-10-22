import React from 'react';
import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard.js';
import ComponentNotMatch from './ComponentNotMatch';

const MainPage = () => {

    
    
    return <div className="main-content container pt-5">
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/new-question" element={<NewQuestion/>}/>
            <Route path="/leader-board" element={<Leaderboard/>}/>
            <Route path="*" element={<ComponentNotMatch />} />
        </Routes>
    </div>
}

export default MainPage;