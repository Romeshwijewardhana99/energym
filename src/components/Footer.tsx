import React from 'react';
import { Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, Youtube as YoutubeIcon } from 'lucide-react';
import {  FaTiktok } from 'react-icons/fa';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
          <span className="text-xl font-bold">
              <span className="text-[#f04343]">ENER</span>
              <span className=" dark:text-white">GYM</span>
            </span>
            <p className="text-gray-400 mb-4">
              Transforming lives through fitness. Join our community and start
              your journey to a healthier, stronger you.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/energym.facebook" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="https://www.instagram.com/energym_the_art_of_wellness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.tiktok.com/@__energym__?is_from_webapp=1&sender_device=pc"
                className="text-gray-400 hover:text-white"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>

              {/* <a href="#" className="text-gray-400 hover:text-white" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a> */}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white">
                  Membership
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-400 hover:text-white">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#timetable" className="text-gray-400 hover:text-white">
                  Class Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* Membership */}
          <div>
            <h3 className="text-lg font-bold mb-4">Membership</h3>
            <ul className="space-y-2">
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white">
                  Basic Plan
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white">
                  Premium Plan
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white">
                  Elite Plan
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* <div id="admin">
            <h3 className="text-lg font-bold mb-4">Admin Access</h3>
            <p className="text-gray-400 mb-4">
              Authorized personnel only. Please login to access the management
              system.
            </p>
            <a href="#" className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Admin Login
            </a>
          </div> */}
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Energym. All rights reserved | Powered by : Romesh Wijewardhana.
          </p>
        </div>
      </div>
    </footer>;
};