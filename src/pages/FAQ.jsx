import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
          "HomeStay is a platform that connects travelers with unique accommodation options around the world. We enable hosts to share their spaces and provide guests with memorable staying experiences.",
      },
      {
        id: "g2",
        question: "How do I get started?",
        answer:
          "Getting started is easy! Simply create an account, verify your email, and you can start browsing available homestays or list your own property.",
      },
      {
        id: "g3",
        question: "Is HomeStay available worldwide?",
        answer:
          "Yes, HomeStay is available in over 50 countries. We’re continuously expanding our reach to provide more options for travelers globally.",
      },
    ],
    booking: [
      {
        id: "b1",
        question: "How do I make a booking?",
        answer:
          "To make a booking, search for your desired location and dates, select a homestay, and follow the booking process. You’ll need to be logged in to complete the booking.",
      },
      {
        id: "b2",
        question: "What payment methods are accepted?",
        answer:
          "We accept major credit cards, debit cards, and various digital payment methods including PayPal.",
      },
      {
        id: "b3",
        question: "Can I cancel my booking?",
        answer:
          "Yes, you can cancel your booking, but the refund amount will depend on the cancellation policy of the specific homestay and how far in advance you cancel.",
      },
    ],
    hosting: [
      {
        id: "h1",
        question: "How do I become a host?",
        answer:
          'To become a host, create an account, click on "Become a Host," and follow the step-by-step process to list your property.',
      },
      {
        id: "h2",
        question: "How much can I earn as a host?",
        answer:
          "Your earnings depend on various factors including location, property type, and seasonal demand. You can use our earnings calculator to get an estimate.",
      },
      {
        id: "h3",
        question: "What support do hosts receive?",
        answer:
          "Hosts receive 24/7 support, access to hosting tools, property management features, and protection through our Host Guarantee program.",
      },
    ],
    account: [
      {
        id: "a1",
        question: "How do I reset my password?",
        answer:
          'Click on "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email to reset your password.',
      },
      {
        id: "a2",
        question: "How do I verify my account?",
        answer:
          "Account verification requires a valid government ID and email confirmation. Some features may require additional verification steps.",
      },
    ],
    support: [
      {
        id: "s1",
        question: "How do I contact customer support?",
        answer:
          "You can reach our customer support team through the Contact page, email at support@homestay.com, or phone at +1 (555) 123-4567.",
      },
      {
        id: "s2",
        question: "What should I do in case of an emergency?",
        answer:
          "In case of emergency, contact local authorities first, then notify us through our 24/7 emergency support line.",
      },
    ],
  };

  const toggleQuestion = (questionId) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const filteredFaqs = searchTerm
    ? Object.values(faqs)
        .flat()
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : faqs[activeCategory];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Find answers to common questions about HomeStay
            </p>

            {/* Search Bar */}
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
        {!searchTerm && (
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openQuestions.includes(faq.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openQuestions.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Still Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
