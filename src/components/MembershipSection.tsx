import React from 'react';
import { Check as CheckIcon } from 'lucide-react';
export const MembershipSection = () => {
  return <section id="membership" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            MEMBERSHIP PLANS
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the membership plan that best fits your fitness goals and
            budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-600">
            <div className="p-6 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Basic
              </h3>
              <div className="text-center">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  LKR :
                </span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                  Add Features
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Add Features
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Add Features
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Add Features
                  </span>
                </li>
              </ul>
              <div className="mt-6">
              <a
                href="#contact"
                className="block w-full bg-[#f04343] hover:bg-[#d93636] dark:bg-[#f87171] dark:hover:bg-[#fb7171] text-white text-center py-3 rounded-md font-medium transition-colors duration-200"
                >
                Join Now
                </a>
              </div>
            </div>
          </div>
          {/* Premium Plan - Highlighted */}
<div className="bg-blue-600 dark:bg-blue-800 rounded-lg shadow-xl overflow-hidden transform scale-105 z-10">
  <div className="p-6 bg-blue-700 dark:bg-blue-900">
    <div className="text-center mb-2">
      <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full">
        MOST POPULAR
      </span>
    </div>
    <h3 className="text-2xl font-bold text-white text-center mb-2">
      Premium
    </h3>
    <div className="text-center">
      <span className="text-4xl font-bold text-white">LKR :</span>
      <span className="text-blue-200 dark:text-blue-300">/month</span>
    </div>
  </div>
  <div className="p-6">
    <ul className="space-y-3">
      <li className="flex items-start">
        <CheckIcon size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-white">Add Features</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-white">Add Features</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-white">Add Featuresh</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-white">Add Features</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-yellow-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-white">Add Features</span>
      </li>
    </ul>
    <div className="mt-6">
      <a
        href="#contact"
        className="block w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-center py-3 rounded-md font-medium transition-colors"
      >
        Join Now
      </a>
    </div>
  </div>
</div>

{/* Elite Plan */}
<div className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
  <div className="p-6 bg-gray-100 dark:bg-gray-900">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">
      Elite
    </h3>
    <div className="text-center">
      <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">LKR :</span>
      <span className="text-gray-600 dark:text-gray-300">/month</span>
    </div>
  </div>
  <div className="p-6">
    <ul className="space-y-3">
      <li className="flex items-start">
        <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-gray-700 dark:text-gray-300">Add Features</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-gray-700 dark:text-gray-300">Add Features</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-gray-700 dark:text-gray-300">Add Features</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-gray-700 dark:text-gray-300">Add Features</span>
      </li>
      <li className="flex items-start">
        <CheckIcon size={20} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
        <span className="text-gray-700 dark:text-gray-300">Add Features</span>
      </li>
    </ul>
    <div className="mt-6">
            <a
        href="#contact"
        className="block w-full bg-[#f04343] hover:bg-[#d93636] dark:bg-[#f87171] dark:hover:bg-[#fb7171] text-white text-center py-3 rounded-md font-medium transition-colors duration-200"
        >
        Join Now
        </a>
    </div>
  </div>
</div>

        </div>
        {/* Special Offers */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Special Offer
                </h3>
                {/* <p className="text-blue-100 text-lg mb-3">
                  Join today and get 20% off your first 3 months on any
                  membership plan!
                </p>
                <p className="text-blue-200">
                  *Offer valid for new members only. Expires December 31, 2023.
                </p> */}
                <p className="text-blue-200">
                  *offer will be Available hear soon.
                </p> 
              </div>
              <div className="flex-shrink-0">
                <a href="#contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-md font-medium text-lg transition-colors">
                  Claim Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};