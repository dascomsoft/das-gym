// components/Chatbot.tsx
"use client";
import { useState, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'fr'>('en'); // Sélecteur de langue

  // Send an initial message when the component loads
  useEffect(() => {
    const sendInitialMessage = async () => {
      const initialMessage = language === 'en' ? "Hello! How can I assist you today?" : "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
      setMessages([{ text: initialMessage, isUser: false }]);
    };
    sendInitialMessage();
  }, [language]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (message?: string) => {
    const userMessage = message || inputText;
    if (!userMessage.trim()) return;

    // Add the user's message
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
    if (!message) setInputText('');
    setError(null); // Reset error

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, language }), // Envoie la langue sélectionnée
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch response");
      }

      const data = await response.json();

      // Add the chatbot's response
      setMessages((prev) => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error("Error:", error);
      setError(language === 'en' ? "Sorry, an error occurred. Please try again." : "Désolé, une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="p-4 bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={toggleChatbot} className="text-white">
              ×
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
          </div>
          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-2 mb-2">
              <button
                onClick={() => handleSendMessage(language === 'en' ? "What are your opening hours?" : "Quels sont vos horaires d'ouverture ?")}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {language === 'en' ? "Opening Hours" : "Horaires d'ouverture"}
              </button>
              <button
                onClick={() => handleSendMessage(language === 'en' ? "How much are the memberships?" : "Quels sont les prix des abonnements ?")}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {language === 'en' ? "Membership Prices" : "Prix des abonnements"}
              </button>
              <button
                onClick={() => handleSendMessage(language === 'en' ? "What equipment do you have?" : "Quels équipements avez-vous ?")}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {language === 'en' ? "Equipment" : "Équipements"}
              </button>
            </div>
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'}`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm ${language === 'fr' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'}`}
              >
                Français
              </button>
            </div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={language === 'en' ? "Ask your question..." : "Posez votre question..."}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )}
      <button
        onClick={toggleChatbot}
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        💬
      </button>
    </div>
  );
};

export default Chatbot;