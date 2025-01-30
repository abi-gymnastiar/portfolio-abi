import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaItchIo } from "react-icons/fa"; // Social Icons
import GameProjectsBanner from "../components/GameProjectBanner";
import ArtProjectBanner from "../components/ArtProjectBanner";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Link to="/about" className="block">
        <section className="relative bg-gradient-to-l from-emerald-600 via-emerald-500 to-emerald-300 h-[500px] flex items-center cursor-pointer transition-transform duration-300 hover:bg-gradient-to-l hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-400">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 w-full h-full">
            
            {/* Left - Name & Socials */}
            <div className="md:w-1/3 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Abiansyah Gymnastiar
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-lg">
                I'm a passionate video game programmer and 3D artist, creating immersive gaming experiences.
              </p>

              {/* Social Media Links */}
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <a
                  href="https://www.instagram.com/abigymnastiar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition"
                >
                  <FaInstagram className="text-2xl" />
                  @abigymnastiar
                </a>
                <a
                  href="https://betabeta1.itch.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 hover:text-gray-900 transition"
                >
                  <FaItchIo className="text-2xl" />
                  betabeta1
                </a>
              </div>
            </div>

            {/* Right - Image with Fading Transparency Gradient */}
            <div className="md:w-1/2 h-full relative overflow-hidden">
              <img
                src="abi-picture.jpg" // Update with actual image path
                alt="Abiansyah Gymnastiar"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                style={{
                  WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                  maskImage: "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>

          </div>
        </section>
      </Link>
      <div>
        {/* Game Projects Banner */}
        <GameProjectsBanner />
        <ArtProjectBanner />
      </div>
    </div>
  );
};

export default Home;
