import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShippingFast,
  FaAward,
  FaHeadset,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import profile from "../assets/profile.jpeg";
const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Passionate about creating exceptional shopping experiences.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Ensuring smooth operations and customer satisfaction.",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Curator",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Expert in selecting the finest products for our customers.",
    },
    {
      name: "David Kim",
      role: "Customer Experience",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Dedicated to making every customer feel valued.",
    },
  ];

  const values = [
    {
      icon: FaAward,
      title: "Quality First",
      description:
        "We carefully curate every product to ensure the highest standards.",
    },
    {
      icon: FaShippingFast,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get your orders to you fast.",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Our customer support team is always here to help you.",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Shopping",
      description:
        "Your data and payments are protected with advanced security.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      event: "Founded with a vision to revolutionize online shopping",
    },
    { year: "2019", event: "Reached 10,000 happy customers" },
    { year: "2020", event: "Expanded product catalog to 500+ items" },
    {
      year: "2021",
      event: "Launched mobile app for better shopping experience",
    },
    { year: "2022", event: "Opened international shipping to 50+ countries" },
    {
      year: "2023",
      event: "Celebrated 5 years of serving customers worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Dedicated to bringing you the finest products with exceptional
            service since 2018.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves access to high-quality
                products at affordable prices. Our mission is to create a
                shopping experience that's not just convenient, but delightful.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From carefully selecting each item in our catalog to ensuring
                prompt delivery and exceptional customer service, we're
                committed to exceeding your expectations at every step.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={profile}
                alt="Our team"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">1 Years</div>
                <div>of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product selection to
              customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your exceptional shopping experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg flex-1">
                  <p className="text-gray-800">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions or want to learn more about us? We'd love to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact-support")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
