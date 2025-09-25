import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Play, Download, Database, Filter, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const VirtualScreening: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const screeningData = [
    { name: 'Excellent', count: 45, color: '#00ff88' },
    { name: 'Good', count: 128, color: '#00ffff' },
    { name: 'Average', count: 234, color: '#fbbf24' },
    { name: 'Poor', count: 593, color: '#f87171' },
  ];

  const runScreening = async () => {
    setIsRunning(true);
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    setResults({
      totalCompounds: 10000,
      hits: 45,
      hitRate: 0.45,
      topCompound: 'ZINC000123456',
      avgAffinity: -7.2,
    });
    setIsRunning(false);
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
          <Search className="h-8 w-8 text-neon-cyan mr-3" />
          Virtual Screening
        </h1>
        <p className="text-gray-400">
          High-throughput screening of molecular libraries for potential drug candidates
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Screening Setup */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
            <Filter className="h-5 w-5 text-neon-cyan mr-2" />
            Screening Parameters
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Database Selection
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white">
                <option>ZINC Database (10M compounds)</option>
                <option>ChEMBL (2.5M compounds)</option>
                <option>PubChem (100M compounds)</option>
                <option>DrugBank (13K compounds)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Target Protein
              </label>
              <select className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white">
                <option>DNA Gyrase (1KZN)</option>
                <option>Penicillin-binding protein (1PWC)</option>
                <option>Beta-lactamase (1XPB)</option>
                <option>RNA Polymerase (6C6U)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Min Affinity
                </label>
                <input
                  type="number"
                  defaultValue="-6.0"
                  step="0.1"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Max RMSD
                </label>
                <input
                  type="number"
                  defaultValue="2.0"
                  step="0.1"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Screening Mode
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="mode" value="fast" defaultChecked className="mr-2" />
                  <span className="text-sm text-gray-300">Fast (10K compounds)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="mode" value="thorough" className="mr-2" />
                  <span className="text-sm text-gray-300">Thorough (100K compounds)</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="mode" value="complete" className="mr-2" />
                  <span className="text-sm text-gray-300">Complete (1M compounds)</span>
                </label>
              </div>
            </div>

            <button
              onClick={runScreening}
              disabled={isRunning}
              className="w-full bg-neon-cyan hover:bg-quantum-500 disabled:bg-gray-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
            >
              {isRunning ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Screening...</span>
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  <span>Start Screening</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Results Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Progress/Status */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-xl text-white mb-4">
              Screening Status
            </h3>
            
            {isRunning && (
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Progress</span>
                  <span className="text-neon-cyan">Processing...</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-neon-cyan h-2 rounded-full animate-pulse" style={{width: '45%'}}></div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">4,523</p>
                    <p className="text-sm text-gray-400">Processed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neon-green">23</p>
                    <p className="text-sm text-gray-400">Hits Found</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">0.51%</p>
                    <p className="text-sm text-gray-400">Hit Rate</p>
                  </div>
                </div>
              </div>
            )}

            {!isRunning && !results && (
              <div className="text-center py-8">
                <Database className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">Ready to start virtual screening</p>
              </div>
            )}

            {results && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white">{results.totalCompounds.toLocaleString()}</p>
                  <p className="text-sm text-gray-400">Total Screened</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-neon-green">{results.hits}</p>
                  <p className="text-sm text-gray-400">Hits Found</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-neon-cyan">{results.hitRate}%</p>
                  <p className="text-sm text-gray-400">Hit Rate</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-yellow-400">{results.avgAffinity}</p>
                  <p className="text-sm text-gray-400">Avg Affinity</p>
                </div>
              </div>
            )}
          </div>

          {/* Results Distribution */}
          {results && (
            <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
              <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
                <TrendingUp className="h-5 w-5 text-neon-green mr-2" />
                Results Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={screeningData}>
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
                  <Bar dataKey="count" fill="#00ff88" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Top Hits */}
          {results && (
            <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-montserrat font-semibold text-xl text-white">
                  Top Hits
                </h3>
                <button className="bg-quantum-600 hover:bg-quantum-700 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
              
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">ZINC{String(index).padStart(9, '0')}</h4>
                      <p className="text-sm text-gray-400">MW: {245 + index * 23} Da</p>
                    </div>
                    <div className="text-right">
                      <p className="text-neon-green font-medium">-{8.5 + index * 0.3} kcal/mol</p>
                      <p className="text-sm text-gray-400">{95 - index * 2}% confidence</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default VirtualScreening;
