import { useState, useRef, useEffect } from 'react';

const faqs = {
  "What is Kanai Technologies?": "We're an AI-first company helping SMEs in Africa.",
  "What services do you offer?": "Custom ERP, AI Bots, Lending & Property platforms.",
  "How do I contact support?": "Use the contact form or email support@kanai.com"
};

const WELCOME_MESSAGE = {
  text: "Hi! I'm Kisu, Kanaitech AI sales expert 🤖. How can I help you today?",
  from: 'bot'
};

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([WELCOME_MESSAGE]);
        }
    }, [isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;
        
        const userMsg = { text: input, from: 'user' };
        const botMsg = {
            text: faqs[input] || "Sorry, I don't have an answer for that.",
            from: 'bot'
        };
        setMessages([...messages, userMsg, botMsg]);
        setInput('');
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen && (
                <div className="flex flex-col h-[500px] w-[350px] bg-gray-100 rounded-lg shadow-lg mb-4">
                    <div className="flex justify-between items-center p-4 bg-red-500 text-white rounded-t-lg">
                        <h3 className="font-semibold">Chat with us</h3>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[70%] rounded-lg p-3 ${
                                    msg.from === 'user' ? 'bg-red-500 text-white' : 'bg-white'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                                placeholder="Ask a question..."
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            <button
                onClick={() => setIsOpen(true)}
                className={`bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg flex items-center gap-2 ${isOpen ? 'hidden' : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span>Ask Kisu</span>
            </button>
        </div>
    );
};

export default ChatBot;

