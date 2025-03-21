import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "10 Must-Visit Hidden Gems in Southeast Asia",
      excerpt:
        "Discover the unexplored destinations that will take your breath away...",
      author: "Sarah Johnson",
      date: "2024-03-01",
      readTime: "5 min read",
      category: "Travel Tips",
      image:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=400&fit=crop",
      tags: ["Travel", "Asia", "Adventure"],
    },
    {
      id: 2,
      title: "How to Be the Perfect HomeStay Host",
      excerpt:
        "Learn the secrets of creating memorable experiences for your guests...",
      author: "Michael Chen",
      date: "2024-02-28",
      readTime: "8 min read",
      category: "Hosting Tips",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=400&fit=crop",
      tags: ["Hosting", "Tips", "Hospitality"],
    },
    // Add more blog posts...
  ];

  const categories = [
    "All",
    "Travel Tips",
    "Hosting Tips",
    "Local Experiences",
    "Digital Nomad",
    "Food & Culture",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            HomeStay Blog
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Stories, tips, and insights from the HomeStay community
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </form>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.author}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-primary-600 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated with Our Latest Stories
          </h2>
          <p className="mb-6">
            Subscribe to our newsletter and never miss out on travel tips and
            inspiration.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
