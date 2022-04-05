import React from 'react';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import Header from '../components/Header';
import Filters from '../components/Filters';

const findMentors = () => (
    <>
        <Navigation/> 
        <Header />
        <Filters/>
        <Profile/>
    </>
);

export default findMentors;