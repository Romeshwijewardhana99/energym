import React, { useState } from 'react';
export const TimetableSection = () => {
  const [activeDay, setActiveDay] = useState('monday');
  const schedule = {
    monday: [{
      time: '06:00 - 07:00',
      class: 'Morning Bootcamp',
      trainer: 'Sarah Johnson',
      level: 'All Levels'
    }, {
      time: '09:30 - 10:30',
      class: 'Yoga Flow',
      trainer: 'Michael Chen',
      level: 'Beginner'
    }, {
      time: '12:00 - 13:00',
      class: 'HIIT',
      trainer: 'David Rodriguez',
      level: 'Intermediate'
    }, {
      time: '17:30 - 18:30',
      class: 'Strength Training',
      trainer: 'Sarah Johnson',
      level: 'All Levels'
    }, {
      time: '19:00 - 20:00',
      class: 'Spin Class',
      trainer: 'Aisha Williams',
      level: 'All Levels'
    }],
    tuesday: [{
      time: '07:00 - 08:00',
      class: 'CrossFit',
      trainer: 'David Rodriguez',
      level: 'Advanced'
    }, {
      time: '10:00 - 11:00',
      class: 'Pilates',
      trainer: 'Michael Chen',
      level: 'All Levels'
    }, {
      time: '12:30 - 13:30',
      class: 'Cardio Blast',
      trainer: 'Sarah Johnson',
      level: 'Intermediate'
    }, {
      time: '18:00 - 19:00',
      class: 'Boxing',
      trainer: 'David Rodriguez',
      level: 'Beginner'
    }, {
      time: '20:00 - 21:00',
      class: 'Meditation',
      trainer: 'Michael Chen',
      level: 'All Levels'
    }],
    wednesday: [{
      time: '06:00 - 07:00',
      class: 'Morning Bootcamp',
      trainer: 'Sarah Johnson',
      level: 'All Levels'
    }, {
      time: '09:30 - 10:30',
      class: 'Core Strength',
      trainer: 'Aisha Williams',
      level: 'Intermediate'
    }, {
      time: '12:00 - 13:00',
      class: 'Zumba',
      trainer: 'Aisha Williams',
      level: 'All Levels'
    }, {
      time: '17:30 - 18:30',
      class: 'Strength Training',
      trainer: 'Sarah Johnson',
      level: 'All Levels'
    }, {
      time: '19:00 - 20:00',
      class: 'Yoga Flow',
      trainer: 'Michael Chen',
      level: 'All Levels'
    }],
    thursday: [{
      time: '07:00 - 08:00',
      class: 'CrossFit',
      trainer: 'David Rodriguez',
      level: 'Advanced'
    }, {
      time: '10:00 - 11:00',
      class: 'Barre',
      trainer: 'Michael Chen',
      level: 'Beginner'
    }, {
      time: '12:30 - 13:30',
      class: 'HIIT',
      trainer: 'David Rodriguez',
      level: 'Intermediate'
    }, {
      time: '18:00 - 19:00',
      class: 'Spin Class',
      trainer: 'Aisha Williams',
      level: 'All Levels'
    }, {
      time: '20:00 - 21:00',
      class: 'Stretching',
      trainer: 'Michael Chen',
      level: 'All Levels'
    }],
    friday: [{
      time: '06:00 - 07:00',
      class: 'Morning Bootcamp',
      trainer: 'Sarah Johnson',
      level: 'All Levels'
    }, {
      time: '09:30 - 10:30',
      class: 'Yoga Flow',
      trainer: 'Michael Chen',
      level: 'Beginner'
    }, {
      time: '12:00 - 13:00',
      class: 'Body Pump',
      trainer: 'David Rodriguez',
      level: 'Intermediate'
    }, {
      time: '17:30 - 18:30',
      class: 'Cardio Blast',
      trainer: 'Sarah Johnson',
      level: 'Intermediate'
    }, {
      time: '19:00 - 20:00',
      class: 'Kickboxing',
      trainer: 'David Rodriguez',
      level: 'All Levels'
    }],
    saturday: [{
      time: '08:00 - 09:00',
      class: 'Weekend Warrior',
      trainer: 'David Rodriguez',
      level: 'Advanced'
    }, {
      time: '10:00 - 11:00',
      class: 'Yoga Flow',
      trainer: 'Michael Chen',
      level: 'All Levels'
    }, {
      time: '12:00 - 13:00',
      class: 'Zumba',
      trainer: 'Aisha Williams',
      level: 'All Levels'
    }, {
      time: '14:00 - 15:00',
      class: 'Family Fitness',
      trainer: 'Sarah Johnson',
      level: 'All Levels'
    }],
    sunday: [{
      time: '09:00 - 10:00',
      class: 'Gentle Yoga',
      trainer: 'Michael Chen',
      level: 'All Levels'
    }, {
      time: '11:00 - 12:00',
      class: 'Core Strength',
      trainer: 'Aisha Williams',
      level: 'All Levels'
    }, {
      time: '15:00 - 16:00',
      class: 'Meditation',
      trainer: 'Michael Chen',
      level: 'All Levels'
    }]
  };
  const days = [{
    id: 'monday',
    label: 'Monday'
  }, {
    id: 'tuesday',
    label: 'Tuesday'
  }, {
    id: 'wednesday',
    label: 'Wednesday'
  }, {
    id: 'thursday',
    label: 'Thursday'
  }, {
    id: 'friday',
    label: 'Friday'
  }, {
    id: 'saturday',
    label: 'Saturday'
  }, {
    id: 'sunday',
    label: 'Sunday'
  }];
  return <section id="timetable" className="py-20 bg-white- dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            CLASS TIMETABLE
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"></div>
          {/* <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Check out our weekly schedule of classes and plan your workout
            routine.
          </p> */}<p className="text-blue-200">
                  *Time Table will be Available hear soon.
                </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {/* Day tabs */}
          <div className="flex overflow-x-auto bg-gray-200 dark:bg-gray-700">
            {days.map(day => <button key={day.id} className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors focus:outline-none
                  ${activeDay === day.id ? 'bg-blue-600 dark:bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`} onClick={() => setActiveDay(day.id)}>
                {day.label}
              </button>)}
          </div>
          {/* Schedule table */}
          {/* <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-20 dark:bg-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Class
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Trainer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {schedule[activeDay as keyof typeof schedule].map((item, index) => <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {item.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                        {item.class}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        {item.trainer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.level === 'Beginner' ? 'bg-green-100 text-green-800' : item.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : item.level === 'Advanced' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                          {item.level}
                        </span>
                      </td>
                    </tr>)}
              </tbody>
            </table>
          </div> */}
        </div>
        <div className="mt-8 bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Class Booking Information
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {/* <li>Classes can be booked up to 7 days in advance</li>
            <li>Premium and Elite members get priority booking</li>
            <li>Please arrive 10 minutes before class starts</li>
            <li>Cancellations must be made at least 2 hours before class</li>
            <li>For any questions, please contact our front desk</li> */}
          </ul>
        </div>
      </div>
    </section>;
};