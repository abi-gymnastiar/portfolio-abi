import React from "react";
import SkillsBanner from "../components/SkillsBanner";
import EducationBanner from "../components/EducationBanner";

const AboutMe: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-l from-teal-700 via-teal-500 to-teal-300 h-[500px] flex items-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 w-full h-full">
                    
                    {/* Left - Image with Fading Transparency Gradient */}
                    <div className="md:w-2/5 py-8 h-full relative">
                        <img
                            src="Mira_render.png" // Update with actual image path
                            alt="Abiansyah Gymnastiar"
                            className="w-full h-full object-cover"
                            style={{
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                            }}
                        />
                    </div>

                    {/* Right - Name & Description */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                            Name is Abiansyah,
                        </h1>
                        <h2 className="text-4xl md:text-2xl pt-4 font-bold text-gray-900">
                            But you may know me as Betabeta.
                        </h2>
                        <p className="mt-4 text-lg text-gray-700 max-w-lg text-justify">
                        Have a big interest in the Video
                        Game industry since I first play The Elder Scrolls V: Skyrim back in 2013. Always
                        wanted to be a game developer and has been improving my skills in all sorts of
                        game dev stuff since I started college back in 2021. Currently, I have most
                        experience with programming and have worked on some projects.
                        </p>
                    </div>

                </div>
            </section>
            <div>
                <EducationBanner />
                <SkillsBanner />
            </div>
        </div>
    );
};

export default AboutMe;
