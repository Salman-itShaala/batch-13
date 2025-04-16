import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3>{question}</h3>
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer and can be used for both web and mobile applications."
    },
    {
      question: "What are React Hooks?",
      answer: "React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to enable state management and side effects in functional components."
    },
    {
      question: "What is Virtual DOM?",
      answer: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to improve performance by minimizing direct manipulation of the DOM. It compares the virtual DOM with the real DOM and only updates what's necessary."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes it easier to write and understand React components by combining the power of JavaScript with the readability of HTML."
    }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ; 