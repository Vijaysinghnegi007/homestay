import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const lastUpdated = "2024-03-01";

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: `Welcome to HomeStay's Privacy Policy. This policy explains how we collect, use, and protect your personal information when you use our services.`,
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, including:
        • Personal identification information
        • Contact information
        • Payment information
        • Communication preferences`,
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: `We use the collected information for:
        • Providing and improving our services
        • Processing your bookings
        • Communicating with you
        • Marketing and promotional purposes (with your consent)`,
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      content: `We may share your information with:
        • Service providers
        • Legal authorities when required
        • Business partners (with your consent)`,
    },
    {
      id: "data-security",
      title: "Data Security",
      content: `We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.`,
    },
    {
      id: "cookies",
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to enhance your experience on our platform.`,
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: `You have the right to:
        • Access your personal information
        • Correct inaccurate information
        • Request deletion of your information
        • Opt-out of marketing communications`,
    },
    {
      id: "contact",
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us at privacy@homestay.com.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>

          <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {lastUpdated}
          </div>

          {/* Table of Contents */}
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </section>
            ))}
          </div>

          {/* Cookie Preferences Manager */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Cookie Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Essential Cookies
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Required for basic site functionality
                  </p>
                </div>
                <div className="relative">
                  <input type="checkbox" checked disabled className="sr-only" />
                  <div className="w-11 h-6 bg-primary-600 rounded-full"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Help us improve our website
                  </p>
                </div>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Marketing Cookies
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Used for personalized advertisements
                  </p>
                </div>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
              Save Preferences
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
