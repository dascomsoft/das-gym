'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import './schedule.css';

interface ClassItem {
  className: string;
  time: string;
  trainer: string;
}

const scheduleData: Record<string, ClassItem[]> = {
  Monday: [
    { className: 'Fitness', time: '9:00 AM - 10:00 AM', trainer: 'Mr. Smith' },
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Running', time: '4:00 PM - 5:00 PM', trainer: 'Mrs. Samantha' },
    { className: 'Cycling', time: '6:00 PM - 7:00 PM', trainer: 'Mr. Benson' }
  ],
  Tuesday: [
    { className: 'Yoga', time: '9:00 AM - 10:00 AM', trainer: 'Mr. Erickson' },
    { className: 'CrossFit', time: '4:00 AM - 5:00 AM', trainer: 'Marc' },
    { className: 'Meditation', time: '6:00 AM - 7:00 AM', trainer: 'Mr. Lee' }
  ],
  Wednesday: [
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Workout', time: '11:00 AM - 12:00 AM', trainer: 'Franck' },
    { className: 'Boxing', time: '12:00 PM - 1:00 PM', trainer: 'Chan' }
  ],
  Thursday: [
    { className: 'Fitness', time: '9:00 AM - 10:00 AM', trainer: 'Mr. Smith' },
    { className: 'Cycling', time: '6:00 PM - 7:00 PM', trainer: 'Mr. Benson' }
  ],
  Friday: [
    { className: 'Yoga', time: '9:00 AM - 10:00 AM', trainer: 'Mr. Erickson' },
    { className: 'Meditation', time: '6:00 AM - 7:00 AM', trainer: 'Mr. Lee' }
  ],
  Saturday: [
    { className: 'Workout', time: '11:00 AM - 12:00 AM', trainer: 'Franck' },
    { className: 'Boxing', time: '12:00 AM - 1:00 PM', trainer: 'Chan' }
  ],
  Sunday: [
    { className: 'CrossFit', time: '4:00 AM - 5:00 AM', trainer: 'Marc' }
  ]
};

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <div className="header-section pt-36 pb-16 text-white text-center">
        <h1 className="text-5xl font-bold">Explore Our <span className="text-yellow-300">Gymnastics</span> Classes</h1>
        <p className="text-xl mt-7">Discover a variety of classes designed for all levels.</p>
      </div>
      
      <div className='bg-white text-black pt-14'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 py-8 text-center">
            {Object.keys(scheduleData).map(day => (
              <button 
                key={day} 
                onClick={() => setSelectedDay(day)} 
                className={`py-2 px-4 rounded ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          {scheduleData[selectedDay].map((classItem, index) => (
            <div key={index} className="pb-8">
              <div className="container mx-auto px-4">
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-200 p-7 text-center'>
                  <div>
                    <h2 className="text-xl font-semibold">{classItem.className}</h2>
                  </div>
                  <div>
                    <p className="font-semibold">{classItem.time}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{classItem.trainer}</p>
                  </div>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="px-2 py-3 bg-slate-600 hover:bg-red-600 text-white rounded-full"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            <p className="mb-4">Choose an option to continue:</p>
            <div className="flex justify-center gap-4">
              <Link href='/login'className="px-4 py-2 bg-blue-500 text-white rounded">Login</Link>
              <Link href='/register' className="px-4 py-2 bg-green-500 text-white rounded">Register</Link>
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Schedule;