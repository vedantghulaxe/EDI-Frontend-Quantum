import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DashboardHome from '../components/dashboard/DashboardHome';
import MolecularDocking from '../components/dashboard/MolecularDocking';
import VirtualScreening from '../components/dashboard/VirtualScreening';
import QuantumModule from '../components/dashboard/QuantumModule';
import DatasetExplorer from '../components/dashboard/DatasetExplorer';
import ResultsReports from '../components/dashboard/ResultsReports';
import ChatbotAssistant from '../components/dashboard/ChatbotAssistant';
import ProfileSettings from '../components/dashboard/ProfileSettings';

const DashboardPage: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar variant="dashboard" />
      
      <div className="flex">
        <Sidebar isCollapsed={sidebarCollapsed} />
        
        <main className="flex-1 min-h-screen bg-gray-900 relative">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="lg:hidden fixed top-20 left-4 z-50 bg-gray-800 p-2 rounded-lg text-white"
          >
            {sidebarCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </button>

          <div className="p-6">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/docking" element={<MolecularDocking />} />
              <Route path="/screening" element={<VirtualScreening />} />
              <Route path="/quantum" element={<QuantumModule />} />
              <Route path="/dataset" element={<DatasetExplorer />} />
              <Route path="/results" element={<ResultsReports />} />
              <Route path="/chatbot" element={<ChatbotAssistant />} />
              <Route path="/settings" element={<ProfileSettings />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
