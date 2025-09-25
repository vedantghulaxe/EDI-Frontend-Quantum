import React from 'react';
import Navbar from '../components/Navbar';
import ChatbotAssistant from '../components/dashboard/ChatbotAssistant';

const ChatbotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar variant="dashboard" />
      <div className="p-6">
        <ChatbotAssistant />
      </div>
    </div>
  );
};

export default ChatbotPage;
