import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, User, Atom } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  variant?: 'landing' | 'dashboard';
}

const Navbar: React.FC<NavbarProps> = ({ variant = 'landing' }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gray-900/95 backdrop-blur-md border-b border-quantum-700/30 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Atom className="h-8 w-8 text-neon-green" />
            <span className="font-montserrat font-bold text-xl text-white">
              Quantum Pipeline
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {variant === 'landing' && !isAuthenticated && (
              <>
                <Link
                  to="/information"
                  className="text-gray-300 hover:text-neon-cyan transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/login"
                  className="bg-quantum-600 hover:bg-quantum-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-neon-green hover:bg-biotech-500 text-gray-900 px-4 py-2 rounded-lg transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}

            {isAuthenticated && (
              <>
                <div className="flex items-center space-x-2 text-gray-300">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user?.name}</span>
                  <span className="text-xs bg-quantum-600 px-2 py-1 rounded">
                    {user?.role}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
