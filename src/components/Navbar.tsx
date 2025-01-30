import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide text-blue-400">
          My Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-800">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    to={to}
    className="text-lg hover:text-blue-400 transition duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
