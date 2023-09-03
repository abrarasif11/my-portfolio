import React from 'react';
import ProfileBanner from './Banner/ProfileBanner/ProfileBanner';
import AboutMe from '../../AboutMe/AboutMe';
import Skill from '../../Skill/Skill';
import Pruject from '../../Projects/Pruject';
import ContactMe from '../../ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
        <ProfileBanner></ProfileBanner>
         <AboutMe></AboutMe>
         <Skill></Skill>
         <Pruject></Pruject>
         <ContactMe></ContactMe>
        </div>
        
    );
};

export default Home;