import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Filter, Download, Eye, Trash2 } from 'lucide-react';
import { faker } from '@faker-js/faker';

const DatasetExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDataset, setSelectedDataset] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Generate mock molecular data
  const generateMolecularData = () => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: `MOL-${String(index + 1).padStart(4, '0')}`,
      name: faker.science.chemicalElement().name + faker.science.chemicalElement().symbol,
      formula: `C${faker.number.int({ min: 5, max: 20 })}H${faker.number.int({ min: 8, max: 30 })}N${faker.number.int({ min: 1, max: 5 })}O${faker.number.int({ min: 1, max: 8 })}`,
      mw: faker.number.float({ min: 150, max: 500, precision: 0.1 }),
      logP: faker.number.float({ min: -2, max: 6, precision: 0.1 }),
      hbd: faker.number.int({ min: 0, max: 5 }),
      hba: faker.number.int({ min: 1, max: 10 }),
      psa: faker.number.float({ min: 20, max: 150, precision: 0.1 }),
      rotBonds: faker.number.int({ min: 0, max: 15 }),
      dataset: faker.helpers.arrayElement(['ZINC', 'ChEMBL', 'PubChem', 'DrugBank']),
      activity: faker.helpers.arrayElement(['Active', 'Inactive', 'Moderate']),
      affinity: faker.number.float({ min: -12, max: -4, precision: 0.1 }),
    }));
  };

  const [molecules] = useState(generateMolecularData());

  const filteredMolecules = molecules.filter(mol => {
    const matchesSearch = mol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mol.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mol.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDataset = selectedDataset === 'all' || mol.dataset === selectedDataset;
    return matchesSearch && matchesDataset;
  });

  const totalPages = Math.ceil(filteredMolecules.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedMolecules = filteredMolecules.slice(startIndex, startIndex + itemsPerPage);

  const datasets = [
    { name: 'all', label: 'All Datasets', count: molecules.length },
    { name: 'ZINC', label: 'ZINC Database', count: molecules.filter(m => m.dataset === 'ZINC').length },
    { name: 'ChEMBL', label: 'ChEMBL', count: molecules.filter(m => m.dataset === 'ChEMBL').length },
    { name: 'PubChem', label: 'PubChem', count: molecules.filter(m => m.dataset === 'PubChem').length },
    { name: 'DrugBank', label: 'DrugBank', count: molecules.filter(m => m.dataset === 'DrugBank').length },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-montserrat font-bold text-3xl text-white mb-2 flex items-center">
          <Database className="h-8 w-8 text-yellow-400 mr-3" />
          Dataset Explorer
        </h1>
        <p className="text-gray-400">
          Browse and analyze molecular datasets for drug discovery research
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6 flex items-center">
            <Filter className="h-5 w-5 text-yellow-400 mr-2" />
            Filters
          </h3>
          
          {/* Search */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Search Molecules
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Name, formula, or ID..."
                className="w-full pl-10 bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Dataset Filter */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-3">
              Datasets
            </label>
            <div className="space-y-2">
              {datasets.map((dataset) => (
                <label key={dataset.name} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="dataset"
                      value={dataset.name}
                      checked={selectedDataset === dataset.name}
                      onChange={(e) => setSelectedDataset(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-300">{dataset.label}</span>
                  </div>
                  <span className="text-xs text-gray-500">({dataset.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Filters */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Molecular Weight (Da)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="bg-gray-700/50 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="bg-gray-700/50 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                LogP
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="bg-gray-700/50 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="bg-gray-700/50 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-3 space-y-6"
        >
          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-4">
              <h4 className="text-gray-300 text-sm mb-1">Total Molecules</h4>
              <p className="text-2xl font-bold text-white">{filteredMolecules.length.toLocaleString()}</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-4">
              <h4 className="text-gray-300 text-sm mb-1">Avg MW</h4>
              <p className="text-2xl font-bold text-neon-green">
                {(filteredMolecules.reduce((sum, mol) => sum + mol.mw, 0) / filteredMolecules.length).toFixed(1)}
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-4">
              <h4 className="text-gray-300 text-sm mb-1">Active Compounds</h4>
              <p className="text-2xl font-bold text-neon-cyan">
                {filteredMolecules.filter(mol => mol.activity === 'Active').length}
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-4">
              <h4 className="text-gray-300 text-sm mb-1">Datasets</h4>
              <p className="text-2xl font-bold text-yellow-400">
                {new Set(filteredMolecules.map(mol => mol.dataset)).size}
              </p>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-700/50">
              <div className="flex justify-between items-center">
                <h3 className="font-montserrat font-semibold text-xl text-white">
                  Molecular Library
                </h3>
                <button className="bg-quantum-600 hover:bg-quantum-700 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/30">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Molecule
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Formula
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      MW (Da)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      LogP
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Activity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Affinity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {displayedMolecules.map((molecule, index) => (
                    <tr key={molecule.id} className="hover:bg-gray-700/20">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-white">{molecule.name}</div>
                          <div className="text-sm text-gray-400">{molecule.id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300 font-mono">
                        {molecule.formula}
                      </td>
                      <td className="px-6 py-4 text-sm text-white">
                        {molecule.mw.toFixed(1)}
                      </td>
                      <td className="px-6 py-4 text-sm text-white">
                        {molecule.logP.toFixed(1)}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          molecule.activity === 'Active' ? 'bg-neon-green/20 text-neon-green' :
                          molecule.activity === 'Moderate' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {molecule.activity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-white">
                        {molecule.affinity.toFixed(1)} kcal/mol
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-neon-cyan hover:text-white">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-white">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-700/50 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredMolecules.length)} of {filteredMolecules.length} results
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white rounded text-sm"
                >
                  Previous
                </button>
                <span className="px-3 py-1 bg-quantum-600 text-white rounded text-sm">
                  {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white rounded text-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DatasetExplorer;
