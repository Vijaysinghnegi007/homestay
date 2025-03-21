import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Star,
  MapPin,
  Users,
  Wifi,
  Car,
  Coffee,
  Tv,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HomestayDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - in a real app, this would come from an API
  const homestay = {
    id,
    title: "Luxury Villa with Ocean View",
    location: "Bali, Indonesia",
    price: 250,
    rating: 4.9,
    description:
      "Experience luxury living in this stunning ocean-view villa. Perfect for families and groups looking for a peaceful getaway with all modern amenities and breathtaking views.",
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: [
      { icon: <Wifi />, name: "Free WiFi" },
      { icon: <Car />, name: "Free Parking" },
      { icon: <Coffee />, name: "Breakfast Included" },
      { icon: <Tv />, name: "Smart TV" },
    ],
    host: {
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 4.8,
      responseTime: "1 hour",
    },
    reviews: [
      {
        id: 1,
        user: "Alice Johnson",
        rating: 5,
        date: "2024-02-15",
        comment:
          "Amazing place with stunning views. The host was very accommodating and the amenities were top-notch.",
        userImage:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop",
      },
      {
        id: 2,
        user: "Bob Smith",
        rating: 4,
        date: "2024-02-10",
        comment:
          "Great location and beautiful property. Would definitely recommend!",
        userImage:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-96"
          >
            <img
              src={homestay.images[selectedImage]}
              alt={homestay.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {homestay.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative h-44 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${homestay.title} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {homestay.title}
                </h1>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    {homestay.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{homestay.location}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {homestay.description}
              </p>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {homestay.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      {amenity.icon}
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Host Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Host
                </h2>
                <div className="flex items-center space-x-4">
                  <img
                    src={homestay.host.image}
                    alt={homestay.host.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {homestay.host.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Response time: {homestay.host.responseTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Reviews
                </h2>
                <div className="space-y-4">
                  {homestay.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 dark:border-gray-700 pb-4"
                    >
                      <div className="flex items-center space-x-4 mb-2">
                        <img
                          src={review.userImage}
                          alt={review.user}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {review.user}
                          </h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-gray-600 dark:text-gray-400">
                              {review.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${homestay.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">/night</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Check-in
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    minDate={new Date()}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Check-out
                  </label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <select className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg appearance-none">
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                    </select>
                    <Users className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </button>

                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomestayDetails;
