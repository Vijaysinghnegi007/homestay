import React from "react";
import { Link } from "react-router-dom";
import { Search, Star, Heart, Users, Home as HomeIcon } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      icon: <HomeIcon className="w-6 h-6" />,
      title: "Unique Stays",
      description: "Find one-of-a-kind accommodations",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Verified Hosts",
      description: "Quality assured by our team",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Best Experience",
      description: "Memorable stays every time",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Local Support",
      description: "24/7 customer service",
    },
  ];

  const featuredHomestays = [
    {
      id: 1,
      title: "Luxury Villa with Ocean View",
      location: "Bali, Indonesia",
      price: 250,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Mountain Retreat",
      location: "Swiss Alps",
      price: 180,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Beachfront Cottage",
      location: "Maldives",
      price: 300,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen relative flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80)",
          marginTop: "-4rem",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Find Your Perfect Homestay
          </motion.h1>
          <p className="text-xl mb-8">
            Discover unique places to stay around the world
          </p>
          <div className="max-w-3xl mx-auto bg-white rounded-full p-2 flex items-center">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 px-6 py-3 text-gray-900 focus:outline-none"
            />
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Choose HomeStay
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Homestays */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Homestays
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredHomestays.map((homestay, index) => (
              <motion.div
                key={homestay.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={homestay.image}
                  alt={homestay.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {homestay.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {homestay.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">
                      ${homestay.price}/night
                    </span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-gray-600 dark:text-gray-300">
                        {homestay.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors"
            >
              View All Homestays
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of happy travelers who found their perfect stay
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
