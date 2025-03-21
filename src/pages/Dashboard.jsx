import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Home, Heart, Settings, User } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  // Mock data for bookings and favorite homestays
  const bookings = [
    {
      id: "1",
      checkIn: new Date("2024-03-15"),
      checkOut: new Date("2024-03-20"),
      totalPrice: 1250,
      status: "confirmed",
    },
    {
      id: "2",
      checkIn: new Date("2024-04-10"),
      checkOut: new Date("2024-04-15"),
      totalPrice: 900,
      status: "pending",
    },
  ];

  const favoriteHomestays = [
    {
      id: "1",
      title: "Luxury Villa",
      location: "Bali, Indonesia",
      price: 250,
      image: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      title: "Mountain Retreat",
      location: "Swiss Alps",
      price: 180,
      image: "https://via.placeholder.com/150",
    },
  ];

  const tabs = [
    { id: "bookings", label: "My Bookings", icon: Calendar },
    { id: "favorites", label: "Favorites", icon: Heart },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          {/* Dashboard Header */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome back!
              </h1>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-primary-500 text-primary-600 dark:text-primary-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "bookings" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Your Bookings
                </h2>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white dark:bg-gray-700 rounded-lg shadow p-6"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Booking #{booking.id}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Check-in: {booking.checkIn.toLocaleDateString()}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Check-out: {booking.checkOut.toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            }`}
                          >
                            {booking.status.charAt(0).toUpperCase() +
                              booking.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          Total: ${booking.totalPrice}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "favorites" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Favorite Homestays
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favoriteHomestays.map((homestay) => (
                    <div
                      key={homestay.id}
                      className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden"
                    >
                      <img
                        src={homestay.image}
                        alt={homestay.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {homestay.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {homestay.location}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-primary-600">
                          ${homestay.price}/night
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "profile" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-lg mx-auto space-y-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Profile Information
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Save Changes
                  </button>
                </form>
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-lg mx-auto space-y-6"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Account Settings
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Email Notifications
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Receive email updates about your bookings
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button className="text-primary-600 hover:text-primary-500">
                        Enable
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
