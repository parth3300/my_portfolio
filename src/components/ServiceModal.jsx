import React from "react";
import { motion } from "framer-motion";

const ServiceModal = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full shadow-md">
              {React.cloneElement(service.icon, {
                className: "w-12 h-12 text-blue-600",
              })}
            </div>
          </div>
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
          
          {/* Features */}
          {service.features && (
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">What I Offer:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-left">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {service.technologies && (
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm shadow-sm hover:bg-blue-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-blue-600 text-black font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceModal;
