import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  MapPin,
  Star,
  Filter,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";

const Search = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(0);

  const homestays = [
    {
      id: 1,
      title: "Luxury Villa with Ocean View",
      location: "Bali, Indonesia",
      price: 250,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      description:
        "Beautiful villa with stunning ocean views and private pool.",
    },
    {
      id: 2,
      title: "Mountain Retreat",
      location: "Swiss Alps",
      price: 180,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      description: "Cozy mountain cabin perfect for winter getaways.",
    },
    {
      id: 3,
      title: "Beachfront Cottage",
      location: "Maldives",
      price: 300,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
      description:
        "Secluded beachfront cottage with direct access to pristine waters.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Search Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search locations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </h3>

            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Minimum Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-1 rounded-full ${
                        rating >= star ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homestays.map((homestay, index) => (
                <motion.div
                  key={homestay.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <Link to={`/homestay/${homestay.id}`}>
                    <img
                      src={homestay.image}
                      alt={homestay.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {homestay.title}
                        </h3>
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="ml-1 text-gray-600 dark:text-gray-400">
                            {homestay.rating}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{homestay.location}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {homestay.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-primary-600">
                          ${homestay.price}
                          <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                            /night
                          </span>
                        </span>
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
