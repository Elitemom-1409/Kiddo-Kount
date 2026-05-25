'use client';
import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([{
    role: 'ai',
    text: "Hi! I'm Ralph's AI helper. How can I assist you with Kiddo Kount today?"
  }]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    
    // Simple Rule-based Engine
    setTimeout(() => {
      let aiResponse = "I'm not sure about that! But Ralph loves learning math.";
      const lower = userMsg.toLowerCase();
      if (lower.includes('math') || lower.includes('stem')) {
        aiResponse = "Kiddo Kount uses STEM and fun activities to teach math perfectly to toddlers!";
      } else if (lower.includes('ralph')) {
        aiResponse = "Ralph is our cute little blonde star! He explores space and teaches counting!";
      } else if (lower.includes('contact') || lower.includes('support')) {
        aiResponse = "You can reach us at hello@kiddokount.com.";
      }
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl w-80 h-96 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex justify-between items-center text-white">
            <h3 className="font-bold font-fredoka">Ralph's Helper</h3>
            <button onClick={() => setIsOpen(false)} className="text-xl">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`p-2 rounded-xl text-sm ${m.role === 'ai' ? 'bg-gray-100 text-gray-800 self-start mr-8' : 'bg-blue-500 text-white self-end ml-8'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-3 bg-white/50 border-t border-white/40 flex">
            <input 
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 bg-white/70 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded-r-lg font-bold">Send</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-xl hover:scale-110 transition-transform flex items-center justify-center font-bold text-lg border-2 border-white"
        >
          💬 Ask Ralph
        </button>
      )}
    </div>
  );
}
