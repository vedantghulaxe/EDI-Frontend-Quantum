import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Share, Calendar, Filter, Eye } from 'lucide-react';
import { faker } from '@faker-js/faker';

const ResultsReports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<any>(null);

  // Generate mock reports
  const generateReports = () => {
    return Array.from({ length: 15 }, (_, index) => ({
      id: `RPT-${String(index + 1).padStart(4, '0')}`,
      title: `${faker.helpers.arrayElement(['Quantum Enhanced', 'Virtual Screening', 'Molecular Docking', 'Dataset Analysis'])} Report`,
      type: faker.helpers.arrayElement(['docking', 'screening', 'quantum', 'analysis']),
      date: faker.date.recent({ days: 30 }).toISOString().split('T')[0],
      status: faker.helpers.arrayElement(['completed', 'processing', 'failed']),
      molecules: faker.number.int({ min: 100, max: 10000 }),
      hits: faker.number.int({ min: 5, max: 150 }),
      accuracy: faker.number.float({ min: 85, max: 99, precision: 0.1 }),
      runtime: faker.number.int({ min: 5, max: 240 }),
      fileSize: faker.number.float({ min: 1.2, max: 45.8, precision: 0.1 }),
    }));
  };

  const [reports] = useState(generateReports());

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-neon-green bg-neon-green/20';
      case 'processing': return 'text-neon-cyan bg-neon-cyan/20';
      case 'failed': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'docking': return '🧬';
      case 'screening': return '🔍';
      case 'quantum': return '⚛️';
      case 'analysis': return '📊';
      default: return '📄';
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
        <h1 className="font-montserrat font-bold text-3xl text-white mb-2 flex items-center">
          <FileText className="h-8 w-8 text-orange-400 mr-3" />
          Results & Reports
        </h1>
        <p className="text-gray-400">
          Download and manage your computational results and analysis reports
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Reports List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-montserrat font-semibold text-xl text-white">
              Generated Reports
            </h3>
            <div className="flex space-x-2">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm flex items-center space-x-1">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <button className="bg-quantum-600 hover:bg-quantum-700 text-white px-3 py-1 rounded text-sm flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>Export All</span>
              </button>
            </div>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {reports.map((report) => (
              <div
                key={report.id}
                className={`p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors cursor-pointer border-l-4 ${
                  selectedReport?.id === report.id ? 'border-neon-green' : 'border-transparent'
                }`}
                onClick={() => setSelectedReport(report)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(report.type)}</span>
                    <div>
                      <h4 className="font-medium text-white">{report.title}</h4>
                      <p className="text-sm text-gray-400">ID: {report.id}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Date: </span>
                    <span className="text-white">{report.date}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Molecules: </span>
                    <span className="text-white">{report.molecules.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Size: </span>
                    <span className="text-white">{report.fileSize} MB</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Report Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-1 bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6"
        >
          <h3 className="font-montserrat font-semibold text-xl text-white mb-6">
            Report Details
          </h3>

          {!selectedReport ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Select a report to view details</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-medium mb-2">{selectedReport.title}</h4>
                <p className="text-gray-400 text-sm">Generated on {selectedReport.date}</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h5 className="text-gray-300 text-sm mb-1">Report Type</h5>
                  <p className="text-white capitalize">{selectedReport.type}</p>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h5 className="text-gray-300 text-sm mb-1">Status</h5>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedReport.status)}`}>
                    {selectedReport.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <h5 className="text-gray-300 text-sm mb-1">Molecules</h5>
                    <p className="text-white font-medium">{selectedReport.molecules.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <h5 className="text-gray-300 text-sm mb-1">Hits</h5>
                    <p className="text-neon-green font-medium">{selectedReport.hits}</p>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h5 className="text-gray-300 text-sm mb-1">Accuracy</h5>
                  <p className="text-neon-cyan font-medium">{selectedReport.accuracy}%</p>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h5 className="text-gray-300 text-sm mb-1">Runtime</h5>
                  <p className="text-white">{selectedReport.runtime} minutes</p>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-3">
                  <h5 className="text-gray-300 text-sm mb-1">File Size</h5>
                  <p className="text-white">{selectedReport.fileSize} MB</p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button className="w-full bg-neon-green hover:bg-biotech-500 text-gray-900 font-semibold py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
                
                <button className="w-full bg-quantum-600 hover:bg-quantum-700 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download CSV</span>
                </button>
                
                <button className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>Preview</span>
                </button>
                
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Share className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
          <h4 className="text-gray-300 text-sm mb-1">Total Reports</h4>
          <p className="text-3xl font-bold text-white">{reports.length}</p>
          <p className="text-sm text-gray-400 mt-1">All time</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
          <h4 className="text-gray-300 text-sm mb-1">Completed</h4>
          <p className="text-3xl font-bold text-neon-green">
            {reports.filter(r => r.status === 'completed').length}
          </p>
          <p className="text-sm text-gray-400 mt-1">Ready for download</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
          <h4 className="text-gray-300 text-sm mb-1">Processing</h4>
          <p className="text-3xl font-bold text-neon-cyan">
            {reports.filter(r => r.status === 'processing').length}
          </p>
          <p className="text-sm text-gray-400 mt-1">In progress</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
          <h4 className="text-gray-300 text-sm mb-1">Total Size</h4>
          <p className="text-3xl font-bold text-yellow-400">
            {reports.reduce((sum, r) => sum + r.fileSize, 0).toFixed(1)}
          </p>
          <p className="text-sm text-gray-400 mt-1">MB stored</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsReports;
