import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Atom, Cpu, Search, Database, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import Navbar from '../components/Navbar';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Leverage quantum algorithms for enhanced molecular simulations and optimization.',
    },
    {
      icon: Atom,
      title: 'Molecular Docking',
      description: 'Advanced AI-powered protein-ligand binding prediction and analysis.',
    },
    {
      icon: Search,
      title: 'Virtual Screening',
      description: 'High-throughput screening of molecular libraries for drug discovery.',
    },
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'Extensive collection of molecular structures and binding data.',
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantum-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-biotech-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-violet/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-6">
              Quantum-Enhanced
              <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent block">
                Molecular Docking
              </span>
            </h1>
            <p className="font-poppins text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary pipeline combining quantum computing and AI to accelerate drug discovery 
              and combat antibiotic resistance through advanced molecular screening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-neon-green hover:bg-biotech-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 animate-pulse-glow"
              >
                Start Research
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/information"
                className="border border-quantum-500 text-white hover:bg-quantum-500/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="relative z-10 py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
              Addressing the Antibiotic Crisis
            </h2>
            <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
              Antibiotic resistance threatens global health. Our quantum-enhanced pipeline 
              accelerates the discovery of novel antimicrobial compounds through advanced 
              computational methods and AI-driven molecular analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '700K+ Deaths',
                description: 'Annual deaths from antibiotic-resistant infections globally',
              },
              {
                icon: Target,
                title: '10+ Years',
                description: 'Traditional drug development timeline we aim to reduce',
              },
              {
                icon: Zap,
                title: '100x Faster',
                description: 'Quantum-enhanced screening compared to classical methods',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-neon-green mx-auto mb-4" />
                <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
              Advanced Pipeline Features
            </h2>
            <p className="font-poppins text-lg text-gray-300 max-w-2xl mx-auto">
              Our comprehensive platform integrates cutting-edge technologies for 
              accelerated drug discovery and molecular analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300 group"
              >
                <feature.icon className="h-10 w-10 text-neon-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-montserrat font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-quantum-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
              Join the Future of Drug Discovery
            </h2>
            <p className="font-poppins text-lg text-gray-200 mb-8">
              Access our quantum-enhanced platform and contribute to breakthrough research 
              in antimicrobial development.
            </p>
            <Link
              to="/signup"
              className="bg-neon-green hover:bg-biotech-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Atom className="h-6 w-6 text-neon-green" />
              <span className="font-montserrat font-bold text-lg text-white">
                Quantum Pipeline
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Quantum Biotech Research Team. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Developed for advancing computational drug discovery and combating antibiotic resistance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
