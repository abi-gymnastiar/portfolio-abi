import React from 'react';
import { FaInstagram, FaItchIo, FaEnvelope, FaLine, FaLinkedin, FaYoutube, FaGithub, FaCode } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-4">Find me on</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://instagram.com/abigymnastiar" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://betabeta1.itch.io/" target="_blank" rel="noopener noreferrer">
                        <FaItchIo size={24} />
                    </a>
                    <a href="mailto:abiansyahadzanigymnas1012@gmail.com">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://line.me/ti/p/gymnasz" target="_blank" rel="noopener noreferrer">
                        <FaLine size={24} />
                    </a>
                    <a href="https://linkedin.com/in/abiansyah-gymnastiar" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://www.youtube.com/@abiansyahabiansyah4620" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} />
                    </a>
                    <a href="https://leetcode.com/u/abi-gymnastiar/" target="_blank" rel="noopener noreferrer">
                        <FaCode size={24} />
                    </a>
                    <a href="https://github.com/abi-gymnastiar/" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;