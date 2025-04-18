import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, MessageSquare } from 'lucide-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  options?: ChatOption[];
}

interface ChatOption {
  text: string;
  action: () => void;
}

const predefinedResponses = {
  welcome: {
    text: "Hello! How can I help you today?",
    options: [
      { text: "Course Information", value: "courses" },
      { text: "Admission Process", value: "admission" },
      { text: "Fee Structure", value: "fees" },
      { text: "Contact Support", value: "contact" }
    ]
  },
  courses: {
    text: "We offer several courses. Which one interests you?",
    options: [
      { text: "Full Stack Development", value: "fullstack" },
      { text: "Data Science", value: "datascience" },
      { text: "Python with AI", value: "python" },
      { text: "SAP FICO", value: "sap" }
    ]
  },
  admission: {
    text: "Would you like to know about our admission process?",
    options: [
      { text: "Eligibility Criteria", value: "eligibility" },
      { text: "Required Documents", value: "documents" },
      { text: "Application Process", value: "application" },
      { text: "Talk to Counselor", value: "counselor" }
    ]
  },
  fees: {
    text: "What specific information about fees would you like to know?",
    options: [
      { text: "Course Fees", value: "coursefees" },
      { text: "Payment Plans", value: "payment" },
      { text: "Scholarships", value: "scholarships" },
      { text: "EMI Options", value: "emi" }
    ]
  }
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat is first opened
      addMessage({
        id: Date.now().toString(),
        text: predefinedResponses.welcome.text,
        sender: 'bot',
        options: predefinedResponses.welcome.options.map(opt => ({
          text: opt.text,
          action: () => handleOptionSelect(opt.value)
        }))
      });
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const handleOptionSelect = (value: string) => {
    // Add user selection as a message
    addMessage({
      id: Date.now().toString(),
      text: predefinedResponses[value as keyof typeof predefinedResponses]?.options.find(opt => opt.value === value)?.text || value,
      sender: 'user'
    });

    // Add bot response
    setTimeout(() => {
      if (value === 'contact') {
        setShowContactOptions(true);
        addMessage({
          id: Date.now().toString(),
          text: "How would you like to contact us?",
          sender: 'bot',
          options: [
            { 
              text: "WhatsApp",
              action: () => window.open(`https://wa.me/+919372471869?text=${encodeURIComponent('Hi, I would like to know more about your courses.')}`, '_blank')
            },
            {
              text: "Call Us",
              action: () => window.open('tel:+919372471869')
            },
            {
              text: "Send SMS",
              action: () => window.open('sms:+919372471869')
            }
          ]
        });
      } else if (predefinedResponses[value as keyof typeof predefinedResponses]) {
        addMessage({
          id: Date.now().toString(),
          text: predefinedResponses[value as keyof typeof predefinedResponses].text,
          sender: 'bot',
          options: predefinedResponses[value as keyof typeof predefinedResponses].options.map(opt => ({
            text: opt.text,
            action: () => handleOptionSelect(opt.value)
          }))
        });
      }
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addMessage({
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user'
    });
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      addMessage({
        id: Date.now().toString(),
        text: "Let me help you with that. Please select from the following options:",
        sender: 'bot',
        options: predefinedResponses.welcome.options.map(opt => ({
          text: opt.text,
          action: () => handleOptionSelect(opt.value)
        }))
      });
    }, 500);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-[#08406e] text-white p-4 rounded-full shadow-lg"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 z-40 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-[#08406e] text-white p-4 rounded-t-2xl">
              <h3 className="text-lg font-semibold">Chat with Us</h3>
              <p className="text-sm opacity-80">We typically reply within a few minutes</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <TransitionGroup>
                {messages.map((message) => (
                  <CSSTransition
                    key={message.id}
                    timeout={300}
                    classNames="message"
                  >
                    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-[#08406e] text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p>{message.text}</p>
                        {message.options && (
                          <div className="mt-2 space-y-2">
                            {message.options.map((option, index) => (
                              <button
                                key={index}
                                onClick={option.action}
                                className="block w-full text-left px-4 py-2 text-sm bg-white text-[#08406e] rounded hover:bg-gray-50 transition-colors duration-200"
                              >
                                {option.text}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08406e]"
                />
                <button
                  type="submit"
                  className="bg-[#08406e] text-white p-2 rounded-lg hover:bg-[#08406e]/90 transition-colors duration-200"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Options Modal */}
      <AnimatePresence>
        {showContactOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setShowContactOptions(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl p-6 max-w-sm w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <button
                  onClick={() => window.open(`https://wa.me/+919372471869?text=${encodeURIComponent('Hi, I would like to know more about your courses.')}`, '_blank')}
                  className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageSquare size={20} />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => window.open('tel:+919372471869')}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <Phone size={20} />
                  <span>Call Us</span>
                </button>
                <button
                  onClick={() => window.open('sms:+919372471869')}
                  className="w-full flex items-center justify-center space-x-2 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                >
                  <MessageCircle size={20} />
                  <span>Send SMS</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;