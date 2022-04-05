import React from 'react';
import Navigation from '../Components/Navigation';
import Profile from '../Components/Profile';
import Header from '../Components/Header';
import Filters from '../Components/Filters';

const findMentors = () => (
    <>
        <Navigation/> 
        <Header />
        <Filters/>
        <Profile/>
    </>
);

export default findMentors;