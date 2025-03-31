import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code, Layout, Server, Database, ArrowRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
import CarmelaProject from "./CarmelaProject";
import ServiceModal from "./ServiceModal";

// Enhanced Card Components
const Card = ({ className = "", hoverEffect = false, children, ...props }) => {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ${hoverEffect ? "hover:shadow-lg hover:-translate-y-1" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};


// Fixed Notification component
const Notification = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-3 z-50"
    >
      <div className="flex-1 max-w-xs">
        <p className="text-sm">{message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="text-gray-300 hover:text-white focus:outline-none"
        aria-label="Close notification"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedService, setSelectedService] = React.useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleEmailClick = () => {
    const email = "your.email@example.com"; // Replace with your actual email
    navigator.clipboard.writeText(email).then(() => {
      setNotificationMessage(`Email copied to clipboard: ${email}`);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }).catch(err => {
      setNotificationMessage("Failed to copy email to clipboard");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    });
  };
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, accessible, and performant websites with modern frameworks.",
      icon: <Layout className="w-10 h-10 text-blue-600" />,
      features: [
        "Custom website development from scratch",
        "Responsive design for all devices",
        "Performance optimization",
        "SEO-friendly structure",
        "Cross-browser compatibility"
      ],
      technologies: ["React", "Next.js", "TypeScript"]
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with thoughtful user experience principles.",
      icon: <Code className="w-10 h-10 text-blue-600" />,
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Interaction design",
        "Usability testing",
        "Design systems creation"
      ],
      technologies: ["Framer", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      description: "Developing robust APIs and server-side applications with scalable architecture.",
      icon: <Server className="w-10 h-10 text-blue-600" />,
      features: [
        "RESTful API development",
        "GraphQL implementation",
        "Authentication systems",
        "Database integration",
        "Cloud deployment"
      ],
      technologies: ["Node.js", "Django", "Express"]
    },
    {
      title: "Database Design",
      description: "Designing efficient data models and optimized query structures.",
      icon: <Database className="w-10 h-10 text-blue-600" />,
      features: [
        "Database schema design",
        "Query optimization",
        "Data migration",
        "Security implementation",
        "Performance tuning"
      ],
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    }
  ];


  return (
<div className="min-h-screen bg-gray-50">

{/* Hero Section */}
<section id="home" className="py-5 py-lg-7">
  <div className="container">
    <div className="row align-items-center">
      
      {/* Text Content - Left Side */}
      <div className="col-lg-6 mb-5 mb-lg-0">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 fw-bold mb-4">
            Hi, I'm <span className="text-blue-600">Parth Singal</span>
          </h1>
          <p className="lead text-muted mb-4">
            Full Stack Developer specializing in modern web technologies and user-centric design.
          </p>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              I'm a passionate Full-Stack Developer with expertise in React, Node.js, Django, TypeScript, and JavaScript. I build modern, scalable web applications that solve real problems.
            </p>
            
            {/* What I Do Best */}
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What I Do Best</h3>
              <ul className="space-y-2 pl-5 list-disc">
                <li><span className="font-medium">Frontend Development:</span> Dynamic, responsive UIs with React/TypeScript</li>
                <li><span className="font-medium">Backend Development:</span> Robust systems with Node.js and Django</li>
                <li><span className="font-medium">Full-Stack Solutions:</span> Seamless frontend-backend integration</li>
                <li><span className="font-medium">Problem Solving:</span> Complex challenge enthusiast</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Profile Image/Flip Card - Right Side */}
      <div className="col-lg-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="position-relative"
        >
          <div className="flip-card" style={{ height: '700px' }}>
            <div className="flip-card-inner h-100">
              
              {/* Flip Card Front */}
              <div className="flip-card-front rounded-4 overflow-hidden shadow-lg h-100">
                <img 
                  src="/portfolio_image.jpeg" 
                  alt="Profile"
                  className="w-100 h-100 object-cover"
                />
              </div>
              
              {/* Flip Card Back */}
              <div className="flip-card-back rounded-4 bg-gradient-to-br from-blue-800 to-blue-600 text-white d-flex flex-column justify-content-center p-5 h-100">
                <h3 className="text-3xl fw-bold mb-3">Full Stack Developer</h3>
                <div className="w-25 h-2 bg-blue-300 mb-3"></div>
                <p className="mb-4">React | Node.js | Django | TypeScript | MySQL | PostgreSQL</p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button size="sm" className="bg-blue-700 hover:bg-blue-800 transition-colors">
                    2+ Years Experience
                  </Button>
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-800 transition-colors">
                    Remarkable Projects
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Why Work With Me? Section */}
    <div className="row mt-8">
      <div className="col-lg-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
            

            {/* Call to Action */}
            <div className="bg-blue-50 p-5 md:p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 text-center">Let's Build Something Amazing Together!</h3>
              <p className="text-blue-700 mb-4 text-center text-sm md:text-base">
                Whether you're a startup looking to build your MVP or an established business seeking to modernize your platform, 
                I'm here to help. Let's collaborate to create a solution that drives results and exceeds expectations.
              </p>
              <div className="text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base">
                  📩 Reach out today
                </button>
                <p className="text-blue-600 mt-3 font-medium text-sm md:text-base">Let's discuss how I can bring your ideas to life!</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">What I Offer</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                Comprehensive services to bring your digital ideas to life with quality and precision.
              </p>
            </div>

            <div className="row g-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className="col-md-6 col-lg-3 d-flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card hoverEffect className="d-flex flex-column h-100 border-blue-100">
                    <CardContent className="text-center d-flex flex-column h-100">
                      <div className="mb-4 p-3 bg-blue-50 rounded-full mx-auto">
                        {service.icon}
                      </div>
                      <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                      <p className="text-muted flex-grow-1">{service.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors mt-auto"
                        onClick={() => setSelectedService(service)}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CarmelaProject/>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="display-5 fw-bold mb-4">Let's Work Together</h2>
                <p className="lead text-muted mb-5">
                  Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                </p>
                
                <div className="flex justify-center gap-4 flex-wrap mb-5">
                  <Button 
                    variant="primary" 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors"
                    onClick={handleEmailClick}
                  >
                    <Mail size={18} /> Email Me
                  </Button>
                  
                  <Button 
                    variant="primary" 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors"
                    href="https://github.com/yourusername" // Replace with your GitHub URL
                  >
                    <Github size={18} /> GitHub
                  </Button>
                  
                  <Button 
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 transition-colors"
                    href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn URL
                  >
                    <Linkedin size={18} /> LinkedIn
                  </Button>
                </div>

                {showNotification && (
                  <Notification 
                    message={notificationMessage} 
                    onClose={() => setShowNotification(false)} 
                  />
                )}



                <div className="bg-light p-5 rounded-4 shadow-sm">
                  <h3 className="h4 fw-bold mb-4">Send me a message</h3>
                  <form className="row g-3">
                    <div className="col-md-6">
                      <input 
                        type="text" 
                        className="form-control py-3" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <input 
                        type="email" 
                        className="form-control py-3" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                    <div className="col-12">
                      <input 
                        type="text" 
                        className="form-control py-3" 
                        placeholder="Subject" 
                        required 
                      />
                    </div>
                    <div className="col-12">
                      <textarea 
                        className="form-control py-3" 
                        rows="4" 
                        placeholder="Your Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        className="w-100 py-3 bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      <style jsx global>{`
  /* Existing Flip Card Styles */
  .flip-card {
    perspective: 1000px;
    height: 500px;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-back {
    transform: rotateY(180deg);
  }

  /* Color Utilities */
  .bg-blue-100 {
    background-color: #dbeafe;
  }
  
  .text-blue-800 {
    color: #1e40af;
  }
  
  .bg-gradient-to-br {
    background: linear-gradient(to bottom right, var(--tw-gradient-stops));
  }
  
  .from-blue-800 {
    --tw-gradient-from: #1e40af;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(30, 64, 175, 0));
  }
  
  .to-blue-600 {
    --tw-gradient-to: #2563eb;
  }
  
  .border-blue-100 {
    border-color: #dbeafe;
  }
  
  .bg-blue-600 {
    background-color: #2563eb;
  }
  
  .hover\:bg-blue-700:hover {
    background-color: #1d4ed8;
  }
  
  .bg-blue-700 {
    background-color: #1d4ed8;
  }
  
  .hover\:bg-blue-800:hover {
    background-color: #1e40af;
  }
  
  .transition-colors {
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  /* New Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
  }

  .modal-content {
    background: white;
    border-radius: 0.75rem;
    max-width: 42rem;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #6b7280;
    transition: color 0.2s;
  }

  .modal-close:hover {
    color: #1f2937;
  }

  /* Additional Utility Classes */
  .prose {
    max-width: 65ch;
  }

  .prose h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .prose p {
    margin-bottom: 1rem;
    line-height: 1.625;
  }

  .prose ul {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }

  .prose li {
    margin-bottom: 0.5rem;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Animation Classes */
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }

  .animate-slide-up {
    animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Responsive Typography */
  @media (min-width: 768px) {
    .prose {
      font-size: 1.125rem;
    }
    .prose h3 {
      font-size: 1.5rem;
    }
  }

  /* Button Focus States */
  button:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  /* Form Input Styles */
  .form-input {
    transition: all 0.2s;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    width: 100%;
  }

  .form-input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`}</style>
    </div>
  );
};

export default Portfolio;