import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return;
    }

    setSubscribeStatus("loading");
    try {
      // TODO: Implement newsletter subscription
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubscribeStatus("success");
      setEmail("");
    } catch (error) {
      setSubscribeStatus("error");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Testimonials", path: "/testimonials" },
        { label: "Careers", path: "/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", path: "/help" },
        { label: "Safety Center", path: "/safety" },
        { label: "Community Guidelines", path: "/guidelines" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", path: "/terms" },
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Cookie Policy", path: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              HomeStay
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Find your perfect home away from home with our curated selection
              of unique homestays.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 HomeStay Street, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@homestay.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === "loading"}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-600 hover:text-primary-700 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {subscribeStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-sm">
                  Successfully subscribed!
                </p>
              )}
              {subscribeStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Failed to subscribe. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-center text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} HomeStay. All rights reserved.
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
