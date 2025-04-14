import React from 'react';
import { Dumbbell as DumbbellIcon, Heart as HeartIcon, Users as UsersIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ABOUT ENERGYM
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              OUR MISSION
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              At Energym, we're committed to providing a welcoming and
              motivating environment where people of all fitness levels can
              achieve their personal health and wellness goals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Founded in 2015, our gym has grown into a community of dedicated
              fitness enthusiasts and professionals who support each other on
              their fitness journeys.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              We believe that fitness is not just about physical strength, but
              also about mental wellbeing and building lasting relationships
              within our community.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-8 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600 dark:bg-blue-500 p-4 rounded-full text-white mb-4">
                  <DumbbellIcon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Premium Equipment
                </h4>
                <p className="text-gray-700 dark:text-gray-00">
                  State-of-the-art fitness equipment for all your training
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600 dark:bg-blue-500 p-4 rounded-full text-white mb-4">
                  <UsersIcon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Expert Trainers
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Certified professionals to guide and motivate you.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600 dark:bg-blue-500 p-4 rounded-full text-white mb-4">
                  <HeartIcon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Holistic Approach
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Focus on both physical fitness and mental wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};