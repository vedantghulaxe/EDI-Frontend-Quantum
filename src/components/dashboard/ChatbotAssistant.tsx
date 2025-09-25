import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Bot, User, Settings } from 'lucide-react';

const ChatbotAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m your quantum-enhanced molecular docking assistant. How can I help you with your research today?',
      timestamp: new Date().toISOString(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('docking')) {
      return 'Molecular docking is a computational method that predicts the preferred orientation of one molecule to another when bound to form a stable complex. Our quantum-enhanced approach can improve accuracy by 20-30%. Would you like me to explain the specific algorithms we use?';
    }
    
    if (lowerInput.includes('quantum')) {
      return 'Our quantum computing module uses variational quantum eigensolvers (VQE) and quantum approximate optimization algorithms (QAOA) to enhance molecular simulations. This allows us to explore larger conformational spaces more efficiently than classical methods.';
    }
    
    if (lowerInput.includes('screening')) {
      return 'Virtual screening allows you to computationally evaluate large libraries of compounds. Our platform supports databases like ZINC, ChEMBL, and PubChem. The quantum enhancement can process up to 100x more compounds in the same time frame.';
    }
    
    if (lowerInput.includes('help') || lowerInput.includes('how')) {
      return 'I can help you with:\n• Understanding molecular docking protocols\n• Explaining quantum computing applications\n• Guiding you through virtual screening\n• Interpreting results and reports\n• Troubleshooting pipeline issues\n\nWhat specific area would you like to explore?';
    }
    
    if (lowerInput.includes('dataset')) {
      return 'Our dataset explorer contains over 10 million molecular structures from various databases. You can filter by molecular weight, LogP, activity, and binding affinity. Would you like guidance on how to navigate the dataset explorer?';
    }
    
    return 'That\'s an interesting question! I specialize in quantum-enhanced molecular docking and virtual screening. Could you provide more details about what you\'d like to know? I can help with technical explanations, methodology guidance, or troubleshooting your research pipeline.';
  };

  const quickQuestions = [
    'How does quantum docking work?',
    'Explain virtual screening process',
    'What datasets are available?',
    'How to interpret binding affinity?',
    'Troubleshoot failed jobs',
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
          <MessageCircle className="h-8 w-8 text-neon-purple mr-3" />
          AI Research Assistant
        </h1>
        <p className="text-gray-400">
          Get instant help with molecular docking, quantum computing, and virtual screening
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6 h-[600px] flex flex-col"
        >
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' ? 'bg-neon-green' : 'bg-neon-violet'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-gray-900" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-lg px-4 py-3 ${
                    message.type === 'user' 
                      ? 'bg-neon-green text-gray-900' 
                      : 'bg-gray-700/50 text-white border border-gray-600'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-violet flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-700/50 pt-4">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about molecular docking, quantum computing, or virtual screening..."
                className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-neon-violet"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-neon-violet hover:bg-purple-600 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Quick Questions */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-lg text-white mb-4">
              Quick Questions
            </h3>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}
                  className="w-full text-left p-3 bg-gray-700/30 hover:bg-gray-700/50 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Assistant Capabilities */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-lg text-white mb-4">
              I Can Help With
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-neon-green">•</span>
                <span className="text-gray-300">Molecular docking protocols</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-neon-cyan">•</span>
                <span className="text-gray-300">Quantum computing applications</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-neon-violet">•</span>
                <span className="text-gray-300">Virtual screening guidance</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-400">•</span>
                <span className="text-gray-300">Result interpretation</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-orange-400">•</span>
                <span className="text-gray-300">Pipeline troubleshooting</span>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-quantum-700/30 rounded-xl p-6">
            <h3 className="font-montserrat font-semibold text-lg text-white mb-4 flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-gray-300 text-sm mb-1">Response Style</label>
                <select className="w-full bg-gray-700/50 border border-gray-600 rounded px-2 py-1 text-white text-sm">
                  <option>Detailed</option>
                  <option>Concise</option>
                  <option>Technical</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">Expertise Level</label>
                <select className="w-full bg-gray-700/50 border border-gray-600 rounded px-2 py-1 text-white text-sm">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatbotAssistant;
