import React from "react";
import SkillCard from "./SkillCard";
import skills from "../data/skills.json";

const SkillsBanner: React.FC = () => {
    return (
        <section className="relative w-full py-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800 text-white text-center">
            <h1 className="text-5xl font-bold drop-shadow-lg">🛠️ Skills</h1>
            <p className="text-lg mt-4 opacity-90 max-w-3xl mx-auto px-4">
                A showcase of my skills in programming, 3D art, UI/UX implementation, and level design.
            </p>

            {/* Skills Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-32">
                {skills.map(skill => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default SkillsBanner;