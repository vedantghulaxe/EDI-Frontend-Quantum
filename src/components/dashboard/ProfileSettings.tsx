import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Save, Camera } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ProfileSettings: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'Student',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: {
      jobComplete: true,
      newFeatures: false,
      weeklyReport: true,
      securityAlerts: true,
    },
    preferences: {
      theme: 'dark',
      language: 'en',
      timezone: 'UTC',
      defaultView: 'dashboard',
    },
  });

  const handleSave = () => {
    // Simulate save
    console.log('Saving profile settings:', formData);
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-montserrat font-bold text-3xl text-white mb-2 flex items-center">
          <User className="h-8 w-8 text-blue-400 mr-3" />
          Profile Settings
        </h1>
        <p className="text-gray-400">
          Manage your account information and preferences
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Basic Information */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
              <User className="h-5 w-5 text-blue-400 mr-2" />
              Basic Information
            </h3>
            
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <button className="bg-quantum-600 hover:bg-quantum-700 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2">
                    <Camera className="h-4 w-4" />
                    <span>Change Photo</span>
                  </button>
                  <p className="text-gray-400 text-xs mt-1">JPG, PNG up to 5MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="Student">Student</option>
                    <option value="Researcher">Researcher</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    placeholder="University/Organization"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
              <Lock className="h-5 w-5 text-red-400 mr-2" />
              Security
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={formData.currentPassword}
                  onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-400"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-400"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-400"
                  />
                </div>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Password Requirements</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• At least 8 characters long</li>
                  <li>• Contains uppercase and lowercase letters</li>
                  <li>• Includes at least one number</li>
                  <li>• Contains at least one special character</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-xl text-white mb-6">
              Preferences
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Theme
                </label>
                <select
                  value={formData.preferences.theme}
                  onChange={(e) => setFormData({
                    ...formData, 
                    preferences: {...formData.preferences, theme: e.target.value}
                  })}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Language
                </label>
                <select
                  value={formData.preferences.language}
                  onChange={(e) => setFormData({
                    ...formData, 
                    preferences: {...formData.preferences, language: e.target.value}
                  })}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Timezone
                </label>
                <select
                  value={formData.preferences.timezone}
                  onChange={(e) => setFormData({
                    ...formData, 
                    preferences: {...formData.preferences, timezone: e.target.value}
                  })}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time</option>
                  <option value="PST">Pacific Time</option>
                  <option value="GMT">Greenwich Mean Time</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Default View
                </label>
                <select
                  value={formData.preferences.defaultView}
                  onChange={(e) => setFormData({
                    ...formData, 
                    preferences: {...formData.preferences, defaultView: e.target.value}
                  })}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green"
                >
                  <option value="dashboard">Dashboard</option>
                  <option value="docking">Molecular Docking</option>
                  <option value="screening">Virtual Screening</option>
                  <option value="quantum">Quantum Module</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notifications & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Notifications */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-lg text-white mb-4 flex items-center">
              <Mail className="h-4 w-4 text-yellow-400 mr-2" />
              Notifications
            </h3>
            
            <div className="space-y-4">
              {Object.entries(formData.notifications).map(([key, value]) => (
                <label key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </span>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setFormData({
                      ...formData,
                      notifications: {
                        ...formData.notifications,
                        [key]: e.target.checked
                      }
                    })}
                    className="h-4 w-4 text-neon-green focus:ring-neon-green border-gray-600 rounded"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Account Stats */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-lg text-white mb-4">
              Account Stats
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Member Since</span>
                <span className="text-white text-sm">Jan 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Total Jobs</span>
                <span className="text-neon-green text-sm">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Quantum Hours</span>
                <span className="text-neon-cyan text-sm">45.2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 text-sm">Storage Used</span>
                <span className="text-yellow-400 text-sm">2.1 GB</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleSave}
              className="w-full bg-neon-green hover:bg-biotech-500 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
            
            <button className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-lg transition-colors">
              Export Data
            </button>
            
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
              Delete Account
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSettings;
