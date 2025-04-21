import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import ServiceCard from "./ServiceCard";
import ProjectCard from "./ProjectCard";
import TestimonialCarousel from "./TestimonialCarousel";
import { Button } from "./ui/button";

const Home = () => {
  // Sample data for services
  const services = [
    {
      id: 1,
      title: "Logo Design",
      description:
        "Distinctive logos that capture your brand essence and leave a lasting impression.",
      icon: "pencil-ruler",
    },
    {
      id: 2,
      title: "Brand Identity",
      description:
        "Comprehensive branding systems that build recognition and trust with your audience.",
      icon: "palette",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Intuitive interfaces and seamless user experiences that engage and convert.",
      icon: "layout",
    },
    {
      id: 4,
      title: "Social Media Graphics",
      description:
        "Eye-catching visuals that boost engagement and strengthen your online presence.",
      icon: "instagram",
    },
    {
      id: 5,
      title: "Print Design",
      description:
        "Impactful print materials from business cards to brochures that communicate your message.",
      icon: "printer",
    },
    {
      id: 6,
      title: "Custom Projects",
      description:
        "Tailored design solutions for your unique needs and creative vision.",
      icon: "sparkles",
    },
  ];

  // Portfolio gallery images
  const projects = [
    {
      id: 1,
      imageUrl: "https://i.imgur.com/Q6BY95F.jpg",
    },
    {
      id: 2,
      imageUrl: "https://i.imgur.com/er45N96.jpg",
    },
    {
      id: 3,
      imageUrl: "https://i.imgur.com/XqE6HkV.jpg",
    },
    {
      id: 4,
      imageUrl: "https://i.imgur.com/63OcKqm.jpg",
    },
    {
      id: 5,
      imageUrl: "https://i.imgur.com/ggy5Szo.jpg",
    },
    {
      id: 6,
      imageUrl: "https://i.imgur.com/EIc8yaH.jpg",
    },
    {
      id: 7,
      imageUrl: "https://i.imgur.com/HtYu6mh.jpg",
    },
    {
      id: 8,
      imageUrl: "https://i.imgur.com/lyKc1Sk.jpg",
    },
    {
      id: 9,
      imageUrl: "https://i.imgur.com/9oFl4ih.jpg",
    },
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      text: "Bhanu transformed our brand with his exceptional design skills. His ability to understand our vision and translate it into stunning visuals exceeded our expectations.",
      name: "Sarah Johnson",
      company: "Bloom Cafe",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      text: "Working with Bhanu was a game-changer for our startup. His UI/UX designs not only look beautiful but have significantly improved our user engagement metrics.",
      name: "Michael Chen",
      company: "TechNova",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      text: "Bhanu's attention to detail and creative approach to our branding needs helped us stand out in a competitive market. Highly recommended!",
      name: "Emma Rodriguez",
      company: "Eco Packaging",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              I'm <span className="text-orange-500">Bhanu Prakash</span>, <br />
              Graphic Designer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Branding | UI/UX | Social Media | Print Design
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
              Let's Work Together
            </Button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://i.imgur.com/V4UvSPk.jpg"
              alt="Bhanu Prakash"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-section"
        className="bg-gray-50 py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HELLO, I'M BHANU PRAKASH
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I'm a passionate graphic designer focused on helping businesses
              stand out through creative visual communication. From logo design
              to complete branding systems, I bring visions to life with clarity
              and style.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Design Project 1"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                alt="Design Project 2"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-section"
        className="bg-white py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CHOOSE MY BEST SERVICE
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Start Your Dream Project
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-full text-lg font-semibold"
              onClick={() => (window.location.href = "tel:+918522817622")}
            >
              Make a call
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section
        id="projects-section"
        className="bg-white py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PORTFOLIO SECTION
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <ProjectCard image={project.imageUrl} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact-section"
        className="bg-orange-500 py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            LET'S WORK TOGETHER
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="bg-white hover:bg-gray-100 text-orange-500 px-10 py-4 rounded-full text-xl font-bold"
              onClick={() => (window.location.href = "tel:+918522817622")}
            >
              MAKE A CALL
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Bhanu Prakash</h3>
              <p className="text-gray-400">Graphic Designer</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#top"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#about-section"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#services-section"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Services
              </a>
              <a
                href="#projects-section"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact-section"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <a
                href="https://www.linkedin.com/in/bhanu-prakash-chilakala-512104266/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_bd_creations__/?igsh=MW5idW1nYWx2ajh1NA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              Copyright © 2025 Bhanu Prakash. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
