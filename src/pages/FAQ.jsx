import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState([]);

  const categories = [
    { id: "general", name: "General" },
    { id: "booking", name: "Booking & Payments" },
    { id: "hosting", name: "Hosting" },
    { id: "account", name: "Account & Security" },
    { id: "support", name: "Support" },
  ];

  const faqs = {
    general: [
      {
        id: "g1",
        question: "What is HomeStay?",
        answer:
          "HomeStay is a platform that connects travelers with unique accommodation options around the world.",
      },
      {
        id: "g2",
        question: "How do I get started?",
        answer:
          "Getting started is easy! Simply create an account, verify your email, and begin browsing or listing.",
      },
      {
        id: "g3",
        question: "Is HomeStay available worldwide?",
        answer:
          "Yes, HomeStay is available in over 50 countries and growing.",
      },
    ],
    booking: [
      {
        id: "b1",
        question: "How do I make a booking?",
        answer:
          "Search your destination, select a homestay, and follow the booking process.",
      },
      {
        id: "b2",
        question: "What payment methods are accepted?",
        answer:
          "We accept major credit/debit cards and PayPal.",
      },
      {
        id: "b3",
        question: "Can I cancel my booking?",
        answer:
          "Yes, based on the homestay’s cancellation policy.",
      },
    ],
    hosting: [
      {
        id: "h1",
        question: "How do I become a host?",
        answer:
          'Create an account, click "Become a Host", and follow the steps.',
      },
      {
        id: "h2",
        question: "How much can I earn as a host?",
        answer:
          "Earnings depend on location, property, and demand.",
      },
      {
        id: "h3",
        question: "What support do hosts receive?",
        answer:
          "Hosts get 24/7 support, hosting tools, and Host Guarantee.",
      },
    ],
    account: [
      {
        id: "a1",
        question: "How do I reset my password?",
        answer:
          'Click "Forgot Password" and follow the instructions.',
      },
      {
        id: "a2",
        question: "How do I verify my account?",
        answer:
          "Verify with a government ID and email confirmation.",
      },
    ],
    support: [
      {
        id: "s1",
        question: "How do I contact customer support?",
        answer:
          "Contact via the Contact page, email, or phone.",
      },
      {
        id: "s2",
        question: "What should I do in case of an emergency?",
        answer:
          "Call local authorities and notify us via emergency support.",
      },
    ],
  };

  const toggleQuestion = (id) => {
    setOpenQuestions((prev) =>
      prev.includes(id) ? prev.filter((q) => q !== id) : [...prev, id]
    );
  };

  // search after 800ms  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 800);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // filter FAQs based on search term
  const filteredFaqs = debouncedSearchTerm
    ? Object.values(faqs)
        .flat()
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
    : faqs[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Find answers to common questions about HomeStay
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {!debouncedSearchTerm && (
          <div className="flex overflow-x-auto space-x-4 mb-8 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      openQuestions.includes(faq.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openQuestions.includes(faq.id) && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
