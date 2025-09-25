import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Atom, 
  Search, 
  Cpu, 
  Database, 
  FileText, 
  MessageCircle, 
  Settings,
  Upload
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Atom, label: 'Molecular Docking', path: '/dashboard/docking' },
    { icon: Search, label: 'Virtual Screening', path: '/dashboard/screening' },
    { icon: Cpu, label: 'Quantum Module', path: '/dashboard/quantum' },
    { icon: Database, label: 'Dataset Explorer', path: '/dashboard/dataset' },
    { icon: FileText, label: 'Results & Reports', path: '/dashboard/results' },
    { icon: MessageCircle, label: 'AI Assistant', path: '/dashboard/chatbot' },
    { icon: Settings, label: 'Profile Settings', path: '/dashboard/settings' },
  ];

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className={`bg-gray-800/50 backdrop-blur-md border-r border-quantum-700/30 h-screen transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-quantum-600/20 text-neon-green border border-quantum-500/30'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-neon-cyan'
                }`
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-poppins text-sm font-medium">
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
