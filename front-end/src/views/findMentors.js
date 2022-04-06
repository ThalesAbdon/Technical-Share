import React from 'react';
import Profile from '../components/MentorsGrid';
import Header from '../components/Header';
import Filters from '../components/Filters';

const findMentors = () => (
    <>
        <Header />
        {/* <Filters/> */}
        <Profile/>
    </>
);

export default findMentors;