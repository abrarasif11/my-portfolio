import React, { useEffect, useState } from 'react';
import Skills from './Skills';


const Skill = () => {
    const [skills, setSkills] = useState()

    useEffect(() =>{
        fetch(skills.json)
        .then(res => res.json())
        .then(data => setSkills(data))
    },[])

    return (
        <div>
            <h3 className='text-4xl mt-10 font-montserrat font-bold'>My <span className='text-indigo-600'> SkillSet</span></h3>
            <section className='grid grid-cols-3 gap-3'>
              {
                skills.map(skill => <Skills
                key={skill.id}
                skill={skill}
                ></Skills>)
              }
            </section>
        </div>
    );
};

export default Skill;