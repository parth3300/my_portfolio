import React from "react";
import { motion } from "framer-motion";

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon,
  iconPosition = "left",
  isLoading = false,
  fullWidth = false,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center 
    rounded-xl font-semibold transition-all
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-60 disabled:cursor-not-allowed
    relative overflow-hidden select-none 
    active:scale-95 will-change-transform
    shadow-lg
  `;

  const sizes = {
    sm: "px-4 py-2 text-sm h-10",
    md: "px-6 py-3 text-base h-12",
    lg: "px-8 py-4 text-lg h-16"
  };

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
      text-black 
      hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 
      focus:ring-indigo-400/50 hover:shadow-xl
    `,
    secondary: `
      bg-gray-900 text-black 
      hover:bg-gray-800 focus:ring-gray-600/30 shadow-md
    `,
    neon: `
      bg-black text-black border-2 border-cyan-400 
      hover:bg-cyan-500 hover:text-black 
      focus:ring-cyan-400/40 
      transition-all duration-300
    `,
    glassmorphism: `
      bg-white/10 backdrop-blur-md text-black border border-white/20
      hover:bg-white/20 hover:backdrop-blur-lg focus:ring-white/30
    `,
    gradient: `
      bg-gradient-to-r from-yellow-500 to-red-500 
      text-black shadow-md hover:shadow-xl
      hover:from-yellow-600 hover:to-red-600
    `,
    success: `
      bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 
      text-black hover:shadow-xl
      hover:from-green-600 hover:via-teal-600 hover:to-blue-600
    `,
    danger: `
      bg-gradient-to-r from-red-500 to-pink-500 
      text-black hover:shadow-xl
      hover:from-red-600 hover:to-pink-600
    `,
    premium: `
      bg-gradient-to-r from-purple-600 to-pink-500 
      text-black hover:shadow-xl
      hover:from-purple-700 hover:to-pink-600
    `
  };

  // Loader Animation
  const loader = (
    <motion.span
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      />
    </motion.span>
  );

  // Button Content
  const content = (
    <motion.span
      className={`flex items-center gap-2 ${isLoading ? "opacity-0" : "opacity-100"}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    >
      {icon && iconPosition === "left" && <span className="text-lg">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="text-lg">{icon}</span>}
    </motion.span>
  );

  return (
    <motion.button
      className={`
        ${baseStyles} 
        ${sizes[size]} 
        ${variants[variant]} 
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={typeof children === "string" ? children : "Button"}
      aria-busy={isLoading}
      {...props}
    >
      {loader}
      {content}

      {/* Ripple Effect */}
      <span className="absolute inset-0 overflow-hidden">
        <motion.span
          className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-25 transition-opacity duration-300"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </span>
    </motion.button>
  );
};

export default Button;
