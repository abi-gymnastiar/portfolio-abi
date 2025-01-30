import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const EducationBanner: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-900 via-cyan-800 to-emerald-700 h-[500px] flex items-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 w-full h-full">
                
                {/* Left - Education Info */}
                <div className="md:w-3/5 text-center md:text-left text-slate-900">
                    <h1 className="text-5xl md:text-6xl font-bold">
                        Education
                    </h1>
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold">
                            Institut Teknologi Sepuluh Nopember Surabaya
                        </h2>
                        <p className="text-2xl mt-2">
                            2021 - Now
                        </p>
                        <p className="text-xl mt-2">
                            Currently pursuing Bachelor Degree of Informatics
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold">
                            Asia University (Taiwan)
                        </h2>
                        <p className="text-2xl mt-2">
                            2023 - Now
                        </p>
                        <p className="text-xl mt-2">
                            Double Degree program (ITS - AU)
                        </p>
                        <p className="text-xl mt-2">
                            Computer Science
                        </p>
                    </div>
                </div>

                {/* Right - Icon */}
                <div className="md:w-1/3 h-full flex items-center justify-center">
                    <FaGraduationCap className="text-slate-900 text-9xl" />
                </div>

            </div>
        </section>
    );
};

export default EducationBanner;
