import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const lastUpdated = "2024-03-01";
  const version = "2.0.0";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: `By accessing and using HomeStay's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
    {
      id: "definitions",
      title: "Definitions",
      content: `• "Service" refers to HomeStay's platform and related services
        • "User" refers to anyone who accesses or uses the Service
        • "Host" refers to users who list their properties
        • "Guest" refers to users who book properties`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
    {
      id: "account",
      title: "Account Registration",
      content: `You must provide accurate and complete information when creating an account. You are responsible for maintaining the security of your account credentials.`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
    {
      id: "booking",
      title: "Booking and Payments",
      content: `• All bookings are subject to host approval
        • Payment must be made through our platform
        • Cancellation policies vary by property
        • Service fees are non-refundable`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
    {
      id: "host-obligations",
      title: "Host Obligations",
      content: `Hosts must:
        • Provide accurate property descriptions
        • Maintain clean and safe accommodations
        • Respond to inquiries promptly
        • Honor confirmed bookings`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
    {
      id: "guest-obligations",
      title: "Guest Obligations",
      content: `Guests must:
        • Respect property rules
        • Not exceed maximum occupancy
        • Report damages promptly
        • Leave the property in reasonable condition`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
    {
      id: "prohibited",
      title: "Prohibited Activities",
      content: `Users may not:
        • Violate any laws or regulations
        • Harass other users
        • Provide false information
        • Circumvent the platform's payment system`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: `HomeStay is not liable for:
        • Actions of users
        • Property damages
        • Personal injury
        • Loss of personal property`,
      version: "2.0.0",
      updated: "2024-03-01",
    },
  ];

  const versionHistory = [
    {
      version: "2.0.0",
      date: "2024-03-01",
      changes: [
        "Updated booking and payment terms",
        "Added host and guest obligations",
        "Clarified liability limitations",
      ],
    },
    {
      version: "1.1.0",
      date: "2023-09-15",
      changes: [
        "Added cancellation policies",
        "Updated account security requirements",
      ],
    },
    {
      version: "1.0.0",
      date: "2023-01-01",
      changes: ["Initial terms of service"],
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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Print
            </button>
          </div>

          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>Version: {version}</span>
            <span>Last updated: {lastUpdated}</span>
          </div>

          {/* Table of Contents */}
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg print:hidden">
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
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Version {section.version} - Updated {section.updated}
                </div>
              </section>
            ))}
          </div>

          {/* Version History */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Version History
            </h2>
            <div className="space-y-6">
              {versionHistory.map((version) => (
                <div
                  key={version.version}
                  className="border-l-4 border-primary-600 pl-4"
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Version {version.version}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Released on {version.date}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    {version.changes.map((change, index) => (
                      <li key={index}>{change}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
