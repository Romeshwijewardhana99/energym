import React from 'react';
import { DumbbellIcon, CalendarIcon, TrophyIcon, StarIcon, ShieldIcon } from 'lucide-react';

export const MembershipSection = () => {
  const plans = [
    { title: 'Monthly Plan', price: 'LKR 3000', period: '/month', icon: <CalendarIcon className="w-8 h-8" /> },
    { title: 'Two Month Plan', price: 'LKR 5000', period: '/2 months', icon: <DumbbellIcon className="w-8 h-8" />, highlight: true },
    { title: 'Quarterly Plan', price: 'LKR 7500', period: '/quarter', icon: <TrophyIcon className="w-8 h-8" /> },
    { title: 'Six Month Plan', price: 'LKR 15000', period: '/6 months', icon: <StarIcon className="w-8 h-8" /> },
    { title: 'Yearly Plan', price: 'LKR 30000', period: '/year', icon: <ShieldIcon className="w-8 h-8" /> },
  ];

  return (
    <section id="membership" className="py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Membership Plans
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Find the right plan for your fitness journey.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="flex flex-wrap justify-center gap-10">

          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative group w-[340px] p-8 rounded-3xl border border-gray-300 dark:border-gray-700 bg-slate-100 dark:bg-gray-800 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                  Most Pouler
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-800 rounded-full">
                  {plan.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{plan.price}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{plan.period}</p>
                <p className="text-sm font-semibold text-red-500 mt-2">
                  Registration fees are not included <br></br> in the package price
                </p>
              </div>
  
                {/* <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8">
                  Registration fees are not included in the package price


              {/* Divider */}
              <div className="w-12 h-1 mx-auto bg-blue-500 rounded-full mb-6"></div>

              {/* Features */}
              <ul className="text-center text-gray-600 dark:text-gray-300 text-sm space-y-2 mb-8">
                <li>✔️ Unlimited Access</li>
                {/* <li>✔️ Group Classes</li> */}
                <li>✔️ Personal Trainer Tips</li>
              </ul>

              {/* Button */}
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-colors duration-300 text-center"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
