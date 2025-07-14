import { useState, useRef, useEffect } from 'react';

const faqs = {
  "Hello": "Hi there! How can I assist you today?",
  "Hi": "Hello there! How can I assist you today?",
  "How are you?": "I am fine thank you. How are you?",
  "Am fine": "Great to hear! How can I assist you today?",
  "Am okay": "Great to hear! How can I assist you today?",
  "What is your name?": "My name is Kisu, your AI assistant.",
  "Whats your name?": "My name is Kisu, your AI assistant.",
  "What is Kanai Technologies?": "We\'re an AI-first innovation company helping SMEs in Africa.",
//   "What is Kanai Technologies?": "Kanaitech is an innovation-driven tech company for SMEs in Africa.",
  "What services do you offer?": "We offer Web development, AI Bots, ERP platforms, and digital tools for businesses.",
  "What does Kanai Technologies do?": "We build AI-driven tools for SMEs.",
//   "What services do you offer?": "Custom ERP, AI agents, Lending & Property platforms.",
  "What are your business hours?": "We are open from 9 AM to 5 PM, Monday to Friday.",
  "How do I contact support?": "Use the contact form or email info@kanaitech.com",
};

const WELCOME_MESSAGE = {
  text: "Hi! I'm Kisu, Kanaitech AI sales expert 🤖. How can I help you today?",
  from: 'bot'
};

const SUGGESTED_QUESTIONS = [
    "What is Kanai Technologies?",
    "What services do you offer?",
    "How do I contact support?"
];

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
        // Check if input is empty
        if (!input.trim()) return;
        
        // Convert input to lowercase for matching
        const userInput = input.trim().toLowerCase();

        // Create user and bot messages
        const userMsg = { text: input, from: 'user' };
        const botMsg = {
            text: faqs[userInput] || "Sorry, I don't have an answer for that.",
            from: 'bot'
        };

        // Add messages to state
        // If the user input matches a suggested question, use the corresponding answer
        setMessages([...messages, userMsg, botMsg]);
        setInput('');
    };

    // const handleSend = () => {
    //     const match = faqs.find(f => f.q.toLowerCase() === input.toLowerCase());
    //     const answer = match ? match.a : "Sorry, I don’t have an answer to that.";
    //     setChat([...chat, { type: 'user', text: input }, { type: 'bot', text: answer }]);
    //     setInput("");
    // };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen && (
                <div className="flex flex-col h-[500px] w-[350px] bg-gray-100 rounded-lg shadow-lg mb-4">
                    <div className="flex justify-between items-center p-4 bg-red-500 text-white rounded-t-lg">
                        {/* <h3 className="font-semibold">Chat with Kisu</h3> */}
                        <h3 className="font-semibold">Ask Kisu 🤖</h3>
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
                    <div className="p-4 border-t space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {messages.length <= 1 && SUGGESTED_QUESTIONS.map((question, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        const userMsg = { text: question, from: 'user' };
                                        const botMsg = { text: faqs[question], from: 'bot' };
                                        setMessages([...messages, userMsg, botMsg]);
                                        setInput('');
                                    }}
                                    className="px-3 py-1.5 text-sm bg-white hover:bg-gray-50 text-gray-700 rounded-full border border-gray-300 transition-colors"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 hover:border-red-400 transition-colors"
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

