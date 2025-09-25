import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Search, 
  Cpu, 
  Database, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DashboardHome: React.FC = () => {
  const stats = [
    {
      icon: Atom,
      title: 'Molecules Screened',
      value: '12,847',
      change: '+23%',
      color: 'text-neon-green',
    },
    {
      icon: CheckCircle,
      title: 'Successful Dockings',
      value: '8,432',
      change: '+18%',
      color: 'text-neon-cyan',
    },
    {
      icon: Cpu,
      title: 'Quantum Jobs',
      value: '156',
      change: '+45%',
      color: 'text-neon-violet',
    },
    {
      icon: Database,
      title: 'Active Datasets',
      value: '24',
      change: '+8%',
      color: 'text-yellow-400',
    },
  ];

  const activityData = [
    { name: 'Mon', docking: 120, screening: 80, quantum: 10 },
    { name: 'Tue', docking: 140, screening: 95, quantum: 15 },
    { name: 'Wed', docking: 160, screening: 110, quantum: 12 },
    { name: 'Thu', docking: 180, screening: 125, quantum: 18 },
    { name: 'Fri', docking: 200, screening: 140, quantum: 22 },
    { name: 'Sat', docking: 90, screening: 60, quantum: 8 },
    { name: 'Sun', docking: 75, screening: 45, quantum: 5 },
  ];

  const recentJobs = [
    {
      id: 'QD-001',
      type: 'Molecular Docking',
      status: 'completed',
      time: '2 hours ago',
      accuracy: '94.2%',
    },
    {
      id: 'VS-042',
      type: 'Virtual Screening',
      status: 'running',
      time: '30 min ago',
      accuracy: '87.8%',
    },
    {
      id: 'QM-018',
      type: 'Quantum Enhancement',
      status: 'pending',
      time: '1 hour ago',
      accuracy: '91.5%',
    },
    {
      id: 'DD-095',
      type: 'Dataset Analysis',
      status: 'completed',
      time: '3 hours ago',
      accuracy: '96.1%',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-neon-green';
      case 'running': return 'text-neon-cyan';
      case 'pending': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'running': return Clock;
      case 'pending': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-montserrat font-bold text-3xl text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Monitor your quantum-enhanced molecular research activities
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className="text-sm text-neon-green font-semibold">{stat.change}</span>
            </div>
            <h3 className="font-montserrat font-semibold text-2xl text-white mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
            <TrendingUp className="h-5 w-5 text-neon-green mr-2" />
            Weekly Activity
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #4B5563',
                  borderRadius: '8px'
                }} 
              />
              <Line type="monotone" dataKey="docking" stroke="#00ff88" strokeWidth={2} />
              <Line type="monotone" dataKey="screening" stroke="#00ffff" strokeWidth={2} />
              <Line type="monotone" dataKey="quantum" stroke="#8a2be2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Success Rate Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
            <BarChart3 className="h-5 w-5 text-neon-cyan mr-2" />
            Success Rates
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #4B5563',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="docking" fill="#00ff88" />
              <Bar dataKey="screening" fill="#00ffff" />
              <Bar dataKey="quantum" fill="#8a2be2" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Jobs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
      >
        <h3 className="font-montserrat font-semibold text-xl text-white mb-6">
          Recent Jobs
        </h3>
        <div className="space-y-4">
          {recentJobs.map((job, index) => {
            const StatusIcon = getStatusIcon(job.status);
            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <StatusIcon className={`h-5 w-5 ${getStatusColor(job.status)}`} />
                  <div>
                    <h4 className="font-medium text-white">{job.type}</h4>
                    <p className="text-sm text-gray-400">Job ID: {job.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white">Accuracy: {job.accuracy}</p>
                  <p className="text-xs text-gray-400">{job.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
