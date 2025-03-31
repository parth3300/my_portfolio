import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

// Custom Button Component
const Button = ({ variant = "default", className = "", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Card Components
const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
          <p className="text-gray-600 mt-2">I build scalable web applications and interactive UIs.</p>
          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <Button>View My Work</Button>
            <Button variant="outline">Contact Me</Button>
          </div>
        </motion.div>

        {/* Flip Card with Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-64 h-64 perspective-1000"
        >
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden shadow-lg">
              {/* Front Side - Your Image */}
              <img 
                src="/portfolio_image.jpeg" 
                alt="Your Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-full bg-gray-800 text-white flex items-center justify-center rotate-y-180">
              {/* Back Side - Text */}
              <div className="text-center p-4">
                <h3 className="text-xl font-bold">Full Stack</h3>
                <h3 className="text-xl font-bold">Developer</h3>
                <div className="w-16 h-1 bg-blue-500 mx-auto my-2"></div>
                <p className="text-sm mt-2">React | Node | Databases</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <h2 className="text-2xl font-semibold mb-4">What I Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Web Development", "UI/UX Design", "Backend Development"].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card>
              <CardContent className="text-center">
                <h3 className="text-lg font-bold">{service}</h3>
                <p className="text-gray-600">Crafting high-quality, scalable, and engaging digital experiences.</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Projects Section */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card>
              <CardContent>
                <h3 className="text-lg font-bold">Project {project}</h3>
                <p className="text-gray-600">A brief description of the project goes here.</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contact Section */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Let's Connect</h2>
      <div className="flex justify-center gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Mail size={18} /> Email
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Github size={18} /> GitHub
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Linkedin size={18} /> LinkedIn
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;