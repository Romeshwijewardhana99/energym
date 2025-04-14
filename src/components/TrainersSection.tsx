import { InstagramIcon, } from 'lucide-react';
import { FaFacebook, FaTiktok } from 'react-icons/fa';

export const TrainersSection = () => {
  const trainers = [
    {
      name: 'Madhushan Chandrasena',
      role: 'Head Trainer',
      bio: 'Certified personal trainer with 10+ years of experience specializing in strength training and weight loss.',
      image: '/madhushan.webp',
      social: {
        instagram: 'https://www.instagram.com/madhushanchandrasena?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        facebook: 'https://www.facebook.com/madushanchandrasena',
        tiktok: 'https://www.tiktok.com/@en_er_gym_fit0?is_from_webapp=1&sender_device=pc',
      },
    },
    // Add more trainers here if needed
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            OUR EXPERT TRAINERS
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our certified fitness professionals are dedicated to helping you
            achieve your fitness goals safely and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:scale-105"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {trainer.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {trainer.bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={trainer.social.instagram}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={20} />
                  </a>
                  <a
                    href={trainer.social.facebook}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href={trainer.social.tiktok}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="TikTok"
                  >
                    <FaTiktok size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
