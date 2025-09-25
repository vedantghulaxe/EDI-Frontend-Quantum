import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Play, Settings, TrendingUp, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const QuantumModule: React.FC = () => {
  const [isQuantumActive, setIsQuantumActive] = useState(false);
  const [quantumJobs, setQuantumJobs] = useState<any[]>([]);

  const quantumMetrics = [
    { name: 'Mon', classical: 65, quantum: 85, advantage: 20 },
    { name: 'Tue', classical: 68, quantum: 89, advantage: 21 },
    { name: 'Wed', classical: 72, quantum: 94, advantage: 22 },
    { name: 'Thu', classical: 70, quantum: 92, advantage: 22 },
    { name: 'Fri', classical: 75, quantum: 98, advantage: 23 },
    { name: 'Sat', classical: 69, quantum: 91, advantage: 22 },
    { name: 'Sun', classical: 71, quantum: 95, advantage: 24 },
  ];

  const quantumCapabilities = [
    { capability: 'Superposition', value: 95 },
    { capability: 'Entanglement', value: 88 },
    { capability: 'Coherence', value: 92 },
    { capability: 'Error Rate', value: 85 },
    { capability: 'Speed', value: 90 },
    { capability: 'Accuracy', value: 94 },
  ];

  const startQuantumJob = () => {
    setIsQuantumActive(true);
    const newJob = {
      id: `QJ-${Date.now()}`,
      type: 'Quantum Enhanced Docking',
      status: 'running',
      progress: 0,
      qubits: 64,
      circuits: 1024,
    };
    
    setQuantumJobs(prev => [newJob, ...prev]);

    // Simulate job progress
    const interval = setInterval(() => {
      setQuantumJobs(prev => 
        prev.map(job => 
          job.id === newJob.id 
            ? { ...job, progress: Math.min(job.progress + 10, 100) }
            : job
        )
      );
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setQuantumJobs(prev => 
        prev.map(job => 
          job.id === newJob.id 
            ? { ...job, status: 'completed', progress: 100 }
            : job
        )
      );
      setIsQuantumActive(false);
    }, 5000);
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
          <Cpu className="h-8 w-8 text-neon-violet mr-3" />
          Quantum Module
        </h1>
        <p className="text-gray-400">
          Leverage quantum computing for enhanced molecular simulations and optimization
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quantum Control Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
            <Settings className="h-5 w-5 text-neon-violet mr-2" />
            Quantum Controls
          </h3>
          
          <div className="space-y-6">
            {/* Quantum Status */}
            <div className="bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Quantum Status</span>
                <div className={`h-2 w-2 rounded-full ${isQuantumActive ? 'bg-neon-green animate-pulse' : 'bg-gray-500'}`}></div>
              </div>
              <p className="text-sm text-gray-400">
                {isQuantumActive ? 'Active - Processing quantum circuits' : 'Ready for quantum operations'}
              </p>
            </div>

            {/* Quantum Parameters */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Quantum Backend
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white">
                <option>IBM Quantum (127 qubits)</option>
                <option>Google Sycamore (70 qubits)</option>
                <option>IonQ Aria (32 qubits)</option>
                <option>Rigetti Aspen (80 qubits)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Qubits
                </label>
                <input
                  type="number"
                  defaultValue="64"
                  max="127"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Circuits
                </label>
                <input
                  type="number"
                  defaultValue="1024"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Algorithm
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white">
                <option>Variational Quantum Eigensolver (VQE)</option>
                <option>Quantum Approximate Optimization (QAOA)</option>
                <option>Quantum Machine Learning (QML)</option>
                <option>Adiabatic Quantum Computing (AQC)</option>
              </select>
            </div>

            <button
              onClick={startQuantumJob}
              disabled={isQuantumActive}
              className="w-full bg-neon-violet hover:bg-purple-600 disabled:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
            >
              {isQuantumActive ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Quantum Processing...</span>
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5" />
                  <span>Execute Quantum Job</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Quantum vs Classical */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
              <TrendingUp className="h-5 w-5 text-neon-green mr-2" />
              Quantum Advantage
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={quantumMetrics}>
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
                <Line type="monotone" dataKey="classical" stroke="#9CA3AF" strokeWidth={2} name="Classical" />
                <Line type="monotone" dataKey="quantum" stroke="#8a2be2" strokeWidth={2} name="Quantum" />
                <Line type="monotone" dataKey="advantage" stroke="#00ff88" strokeWidth={2} name="Advantage %" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Quantum Capabilities Radar */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
              <Activity className="h-5 w-5 text-neon-cyan mr-2" />
              System Capabilities
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={quantumCapabilities}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="capability" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                <Radar
                  name="Performance"
                  dataKey="value"
                  stroke="#8a2be2"
                  fill="#8a2be2"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Quantum Jobs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
      >
        <h3 className="font-montserrat font-semibold text-xl text-white mb-6">
          Quantum Job Queue
        </h3>
        
        {quantumJobs.length === 0 ? (
          <div className="text-center py-8">
            <Cpu className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No quantum jobs running</p>
          </div>
        ) : (
          <div className="space-y-4">
            {quantumJobs.map((job) => (
              <div key={job.id} className="bg-gray-700/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-white">{job.type}</h4>
                    <p className="text-sm text-gray-400">Job ID: {job.id}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.status === 'completed' ? 'bg-neon-green/20 text-neon-green' :
                    job.status === 'running' ? 'bg-neon-cyan/20 text-neon-cyan' :
                    'bg-yellow-400/20 text-yellow-400'
                  }`}>
                    {job.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                  <div>
                    <span className="text-gray-400">Qubits: </span>
                    <span className="text-white">{job.qubits}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Circuits: </span>
                    <span className="text-white">{job.circuits}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Progress: </span>
                    <span className="text-white">{job.progress}%</span>
                  </div>
                </div>
                
                {job.status === 'running' && (
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-neon-violet h-2 rounded-full transition-all duration-300"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default QuantumModule;
