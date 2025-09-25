import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Atom, Cpu, Search, Database, ArrowRight, Target, Zap, Shield, Users, BookOpen, Award } from 'lucide-react';
import Navbar from '../components/Navbar';

const InformationPage: React.FC = () => {
  const pipelineSteps = [
    {
      step: 1,
      title: 'Data Input',
      description: 'Upload molecular structures and define target proteins',
      icon: Database,
    },
    {
      step: 2,
      title: 'Quantum Processing',
      description: 'Apply quantum algorithms for enhanced simulation',
      icon: Cpu,
    },
    {
      step: 3,
      title: 'Virtual Screening',
      description: 'Screen millions of compounds for potential hits',
      icon: Search,
    },
    {
      step: 4,
      title: 'Analysis & Results',
      description: 'Generate reports with binding predictions',
      icon: Atom,
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Quantum Computing Lead',
      expertise: 'Quantum algorithms, VQE, QAOA',
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Computational Biology Director',
      expertise: 'Molecular docking, drug discovery',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Machine Learning Engineer',
      expertise: 'AI models, deep learning',
    },
    {
      name: 'Dr. James Liu',
      role: 'Biochemistry Researcher',
      expertise: 'Protein structures, binding analysis',
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantum-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-biotech-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <Navbar variant="landing" />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-white mb-6">
                About Our
                <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent block">
                  Research Platform
                </span>
              </h1>
              <p className="font-poppins text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of drug discovery through quantum-enhanced computational methods 
                and artificial intelligence to combat global health challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
                The Antibiotic Resistance Crisis
              </h2>
              <p className="font-poppins text-lg text-gray-300 max-w-4xl mx-auto">
                Antibiotic resistance has become one of the most pressing global health challenges of our time. 
                Traditional drug discovery methods are too slow and expensive to keep pace with rapidly evolving pathogens.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Global Health Threat',
                  description: 'Over 700,000 deaths annually from antibiotic-resistant infections, projected to reach 10 million by 2050.',
                  stat: '700K+ Deaths',
                },
                {
                  icon: Target,
                  title: 'Discovery Challenge',
                  description: 'Traditional drug development takes 10-15 years and costs billions, with high failure rates.',
                  stat: '15 Years',
                },
                {
                  icon: Zap,
                  title: 'Our Solution',
                  description: 'Quantum-enhanced pipeline reduces discovery time and increases success rates significantly.',
                  stat: '100x Faster',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-8 text-center"
                >
                  <item.icon className="h-16 w-16 text-neon-green mx-auto mb-6" />
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="text-3xl font-bold text-neon-cyan">{item.stat}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
                Our Quantum-Enhanced Approach
              </h2>
              <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge quantum computing with artificial intelligence to revolutionize 
                molecular docking and virtual screening processes.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                    Quantum Computing Integration
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Our platform leverages quantum algorithms like Variational Quantum Eigensolvers (VQE) 
                    and Quantum Approximate Optimization Algorithms (QAOA) to explore molecular 
                    conformational spaces more efficiently than classical methods.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-neon-green rounded-full mr-3"></span>
                      Enhanced sampling of conformational space
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                      Improved binding affinity predictions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-neon-violet rounded-full mr-3"></span>
                      Reduced computational time complexity
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                    AI-Powered Analysis
                  </h3>
                  <p className="text-gray-300">
                    Machine learning models trained on extensive molecular databases provide 
                    intelligent filtering and ranking of potential drug candidates, significantly 
                    improving hit rates in virtual screening campaigns.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-quantum-700/30 rounded-2xl p-8"
              >
                <h3 className="font-montserrat font-bold text-xl text-white mb-6 text-center">
                  Key Advantages
                </h3>
                <div className="space-y-6">
                  {[
                    { metric: '20-30%', label: 'Improved Accuracy', color: 'text-neon-green' },
                    { metric: '100x', label: 'Faster Processing', color: 'text-neon-cyan' },
                    { metric: '50%', label: 'Cost Reduction', color: 'text-neon-violet' },
                    { metric: '95%', label: 'Success Rate', color: 'text-yellow-400' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{item.label}</span>
                      <span className={`text-2xl font-bold ${item.color}`}>
                        {item.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pipeline Workflow */}
        <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
                Pipeline Workflow
              </h2>
              <p className="font-poppins text-lg text-gray-300">
                Our streamlined process from molecular input to actionable results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-quantum-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-sm">{step.step}</span>
                    </div>
                    {index < pipelineSteps.length - 1 && (
                      <ArrowRight className="absolute top-8 -right-12 h-6 w-6 text-gray-500 hidden md:block" />
                    )}
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact & References */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Potential Impact */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-montserrat font-bold text-3xl text-white mb-6 flex items-center">
                  <Target className="h-8 w-8 text-neon-green mr-3" />
                  Potential Impact
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
                    <h3 className="font-semibold text-lg text-white mb-3">Healthcare Transformation</h3>
                    <p className="text-gray-300">
                      Accelerating the discovery of novel antimicrobial compounds to combat 
                      resistant pathogens and save millions of lives globally.
                    </p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
                    <h3 className="font-semibold text-lg text-white mb-3">Economic Benefits</h3>
                    <p className="text-gray-300">
                      Reducing drug development costs and timeframes, making treatments 
                      more accessible and affordable worldwide.
                    </p>
                  </div>
                  <div className="bg-gray-800/30 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
                    <h3 className="font-semibold text-lg text-white mb-3">Scientific Advancement</h3>
                    <p className="text-gray-300">
                      Pushing the boundaries of computational biology and establishing 
                      new paradigms for quantum-enhanced drug discovery.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Team & References */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-montserrat font-bold text-3xl text-white mb-6 flex items-center">
                    <Users className="h-8 w-8 text-neon-cyan mr-3" />
                    Research Team
                  </h2>
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-quantum-700/30 rounded-lg p-4">
                        <h3 className="font-semibold text-white">{member.name}</h3>
                        <p className="text-neon-cyan text-sm">{member.role}</p>
                        <p className="text-gray-400 text-xs mt-1">{member.expertise}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-montserrat font-bold text-2xl text-white mb-4 flex items-center">
                    <BookOpen className="h-6 w-6 text-yellow-400 mr-2" />
                    Key References
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-300">
                      <span className="text-neon-green">[1]</span> Quantum algorithms for molecular simulation (Nature, 2023)
                    </p>
                    <p className="text-gray-300">
                      <span className="text-neon-green">[2]</span> Machine learning in drug discovery (Science, 2023)
                    </p>
                    <p className="text-gray-300">
                      <span className="text-neon-green">[3]</span> Antibiotic resistance crisis (WHO Report, 2024)
                    </p>
                    <p className="text-gray-300">
                      <span className="text-neon-green">[4]</span> Quantum computing in pharmaceutical research (Nature Reviews, 2024)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-quantum-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
                Join Our Research Initiative
              </h2>
              <p className="font-poppins text-lg text-gray-200 mb-8">
                Be part of the quantum revolution in drug discovery. Access our platform 
                and contribute to breakthrough research in computational biology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/signup"
                  className="bg-neon-green hover:bg-biotech-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
                >
                  Start Research
                </Link>
                <Link
                  to="/login"
                  className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  Access Platform
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformationPage;
