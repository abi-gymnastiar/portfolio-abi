import React from 'react';
import { Skill } from '../types/Skill';


type SkillCardProps = {
    skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    return (
        <div style={{ borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <img 
                src={skill.img} 
                alt={skill.skillName} 
                style={{ borderRadius: '8px', width: '100%', height: '225px', objectFit: 'cover' }} 
            />
            <h1 style={{ margin: '16px 0' }}>{skill.skillName}</h1>
            <p style={{ textAlign: 'justify' }}>{skill.skillDesc}</p>
        </div>
    );
};

export default SkillCard;