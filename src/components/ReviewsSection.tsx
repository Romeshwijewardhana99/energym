import React from 'react';
import { Star as StarIcon, StarHalf as StarHalfIcon } from 'lucide-react';
export const ReviewsSection = () => {
  const reviews = [{
    name: 'Jennifer L.',
    rating: 5,
    date: 'October 15, 2023',
    text: "I've been a member for 6 months and I'm amazed at the results! The trainers are knowledgeable and motivating. The facilities are always clean and the equipment is top-notch. Highly recommend Energym to anyone looking to improve their fitness!"
  }, {
    name: 'Robert K.',
    rating: 4.5,
    date: 'September 3, 2023',
    text: "Great gym with a friendly atmosphere. The classes are challenging but fun, and the trainers really push you to do your best. The only reason I'm not giving 5 stars is because it can get crowded during peak hours. Otherwise, excellent facility."
  }, {
    name: 'Priya M.',
    rating: 5,
    date: 'August 22, 2023',
    text: "Joining Energym was the best decision I've made for my health. The personal training sessions have completely transformed my body and confidence. The staff is always helpful and the community is so supportive!"
  }];
  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} size={20} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<StarHalfIcon key={i} size={20} className="text-yellow-400" />);
      } else {
        stars.push(<StarIcon key={i} size={20} className="text-gray-300" />);
      }
    }
    return stars;
  };
  return <section id="reviews" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            GOOGLE REVIEWS
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          {/* <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            See what our members have to say about their experience at Energym.
          </p> */}
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Google reviwe will be available here soon
          </p>
          {/* <div className="flex items-center justify-center mt-4">
            <div className="flex">{renderRating(4.8)}</div>
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              4.8
            </span>
            <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
            <span className="text-gray-700 dark:text-gray-300">
              Based on 147 reviews
            </span>
          </div> */}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 mr-3">
                  <span className="text-blue-700 dark:text-blue-300 font-bold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.date}
                  </p>
                </div>
              </div>
              <div className="flex mb-3">{renderRating(review.rating)}</div>
              <p className="text-gray-700 dark:text-gray-300">{review.text}</p>
            </div>)}
        </div> */}
        {/* <div className="mt-12 text-center">
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
            View all reviews on Google
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div> */}
        
      </div>
    </section>;
};