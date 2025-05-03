
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-court p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a3.4 3.4 0 0 1 3 2 3.4 3.4 0 0 0 2 2 3.4 3.4 0 0 1 2 3 3.4 3.4 0 0 0 2 2 3.4 3.4 0 0 1 0 6 3.4 3.4 0 0 0-2 2 3.4 3.4 0 0 1-2 3 3.4 3.4 0 0 0-2 2 3.4 3.4 0 0 1-6 0 3.4 3.4 0 0 0-2-2 3.4 3.4 0 0 1-3-2 3.4 3.4 0 0 0-2-2 3.4 3.4 0 0 1 0-6 3.4 3.4 0 0 0 2-2 3.4 3.4 0 0 1 2-3 3.4 3.4 0 0 0 2-2 3.4 3.4 0 0 1 6 0Z" />
              </svg>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-teal to-court bg-clip-text text-transparent">MENA Padel</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-court transition-colors font-medium">Home</Link>
            <Link to="/courts" className="text-gray-700 hover:text-court transition-colors font-medium">Courts</Link>
            <Link to="/coaches" className="text-gray-700 hover:text-court transition-colors font-medium">Coaches</Link>
            <Link to="/about" className="text-gray-700 hover:text-court transition-colors font-medium">About Padel</Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-court hover:bg-court-dark text-white">Book a Court</Button>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-gray-700 hover:text-court transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/courts"
                className="text-gray-700 hover:text-court transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Courts
              </Link>
              <Link 
                to="/coaches"
                className="text-gray-700 hover:text-court transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Coaches
              </Link>
              <Link 
                to="/about"
                className="text-gray-700 hover:text-court transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Padel
              </Link>
              <Button className="bg-court hover:bg-court-dark text-white w-full">
                Book a Court
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
