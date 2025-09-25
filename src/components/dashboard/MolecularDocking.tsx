import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Play, Download, Atom, AlertCircle, CheckCircle } from 'lucide-react';

const MolecularDocking: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const runDocking = async () => {
    if (!selectedFile) return;
    
    setIsRunning(true);
    // Simulate docking process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setResults({
      bindingAffinity: -8.7,
      confidence: 94.2,
      conformations: 15,
      bestPose: 'Pose_1',
      interactionScore: 0.82,
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
          <Atom className="h-8 w-8 text-neon-green mr-3" />
          Molecular Docking
        </h1>
        <p className="text-gray-400">
          Upload molecular structures and predict protein-ligand binding interactions
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6">
            Upload Molecular Structure
          </h3>
          
          <div className="space-y-6">
            {/* File Upload */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Select Molecule File
              </label>
              <div className="border-2 border-dashed border-quantum-700/50 rounded-lg p-8 text-center hover:border-neon-green/50 transition-colors">
                <input
                  type="file"
                  accept=".sdf,.mol,.pdb,.mol2"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="molecule-upload"
                />
                <label htmlFor="molecule-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">
                    {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Supported formats: SDF, MOL, PDB, MOL2
                  </p>
                </label>
              </div>
            </div>

            {/* Parameters */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Search Space (Å)
                </label>
                <input
                  type="number"
                  defaultValue="20"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Max Conformations
                </label>
                <input
                  type="number"
                  defaultValue="20"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>

            {/* Target Selection */}
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

            {/* Run Button */}
            <button
              onClick={runDocking}
              disabled={!selectedFile || isRunning}
              className="w-full bg-neon-green hover:bg-biotech-500 disabled:bg-gray-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
            >
              {isRunning ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  <span>Running Docking...</span>
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  <span>Start Docking</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6">
            Docking Results
          </h3>

          {!results && !isRunning && (
            <div className="text-center py-12">
              <AlertCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No results yet. Upload a molecule and run docking.</p>
            </div>
          )}

          {isRunning && (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-neon-green border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-300">Processing molecular docking...</p>
              <p className="text-gray-500 text-sm mt-2">This may take a few minutes</p>
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-neon-green">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Docking Complete</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="text-gray-300 text-sm mb-1">Binding Affinity</h4>
                  <p className="text-2xl font-bold text-neon-green">{results.bindingAffinity} kcal/mol</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="text-gray-300 text-sm mb-1">Confidence</h4>
                  <p className="text-2xl font-bold text-neon-cyan">{results.confidence}%</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="text-gray-300 text-sm mb-1">Conformations</h4>
                  <p className="text-2xl font-bold text-yellow-400">{results.conformations}</p>
                </div>
                <div className="bg-gray-700/30 rounded-lg p-4">
                  <h4 className="text-gray-300 text-sm mb-1">Interaction Score</h4>
                  <p className="text-2xl font-bold text-neon-violet">{results.interactionScore}</p>
                </div>
              </div>

              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Best Binding Pose</h4>
                <p className="text-gray-300 text-sm mb-4">
                  The optimal binding conformation shows strong hydrogen bonding with 
                  key residues in the active site.
                </p>
                <div className="bg-gray-800 rounded h-32 flex items-center justify-center">
                  <p className="text-gray-500">3D Visualization Placeholder</p>
                </div>
              </div>

              <button className="w-full bg-quantum-600 hover:bg-quantum-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download Results</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MolecularDocking;
