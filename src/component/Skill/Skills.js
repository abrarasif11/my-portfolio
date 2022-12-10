import React from 'react';

const Skills = ({skill}) => {
    
    return (
        <div className="avatar">
            <div className="w-24 rounded-xl">
                <img src={skill.img} alt=''  />
            </div>
        </div>
    );
};

export default Skills;