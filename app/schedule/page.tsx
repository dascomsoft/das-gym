'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './schedule.css'


const scheduleData = {

  Monday: [
    { className: 'Fitness', time: '9:00 AM - 10:00 AM', trainer: 'Mr. Smith' },
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Running', time: '4:00 PM - 5:00 PM', trainer: 'Mrs. Samantha' },
    { className: 'Cycling', time: '6:00 PM - 7:00 PM', trainer: 'Mr. Benson' }

  ],


  Tuesday: [
    { className: 'Yoga', time: '9:00 AM - 10:00 AM', trainer: 'Mr Erickson ' },
    { className: 'CrossFit', time: '4:00 AM - 5:00 AM', trainer: 'Marc' },
    { className: 'Meditation', time: '6:00 AM - 7:00 AM', trainer: 'Mr Lee' }

  ],


  Wednesday: [
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Workout', time: '11:00 AM - 12:00 AM', trainer: 'Franck' },
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Boxing', time: '12:00 AM - 13:00 PM', trainer: 'Chan' }
  ],

  Thursday: [
    { className: 'Fitness', time: '9:00 AM - 10:00 AM', trainer: 'Mr. Smith' },
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Running', time: '4:00 PM - 5:00 PM', trainer: 'Mrs. Samantha' },
    { className: 'Cycling', time: '6:00 PM - 7:00 PM', trainer: 'Mr. Benson' }

  ],


  Friday: [
    { className: 'Yoga', time: '9:00 AM - 10:00 AM', trainer: 'Mr Erickson ' },
    { className: 'CrossFit', time: '4:00 AM - 5:00 AM', trainer: 'Marc' },
    { className: 'Meditation', time: '6:00 AM - 7:00 AM', trainer: 'Mr Lee' }
  ],

  Saturday: [
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Workout', time: '11:00 AM - 12:00 AM', trainer: 'Franck' },
    { className: 'Body Building', time: '10:00 AM - 11:00 AM', trainer: 'Mrs. Johnson' },
    { className: 'Boxing', time: '12:00 AM - 13:00 PM', trainer: 'Chan' }
  ],


  Sunday: [
    { className: 'Yoga', time: '9:00 AM - 10:00 AM', trainer: 'Mr Erickson ' },
    { className: 'CrossFit', time: '4:00 AM - 5:00 AM', trainer: 'Marc' },
    { className: 'Meditation', time: '6:00 AM - 7:00 AM', trainer: 'Mr Lee' }
  ]

};


interface ClassItem {
  className: string;
  time: string;
  trainer: string;
}






function Schedule() {
  // État pour le jour sélectionné
  const [selectedDay, setSelectedDay] = useState('Monday');

  return (
    <div className=''>
      <div className="header-section py-[10rem] text-white">
        <div className="container mx-auto px-4">
          <div className="header-content">
            <h1 className="text-5xl font-bold">Explore Our <span className=' text-yellow-300'>Gymnastics </span> Classes</h1>
            <p className="text-xl mt-7">Discover a variety of classes designed to inspire and challenge every <br /> gymnast, from beginners to advanced athletes..</p>
            <p className='mt-7 text-3xl font-semibold text-yellow-300'>Schedule Day/</p>
          </div>
        </div>
      </div>

      {/* Génération dynamique des boutons pour chaque jour */}
      <div className='bg-white text-black pt-14'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3  py-[3rem]">
            {Object.keys(scheduleData).map(day => (
              <button key={day} onClick={() => setSelectedDay(day)} className={`py-2 px-4 rounded ${selectedDay === day ? 'bg-blue-500 text-white' : 'bg-stone-600 text-white'}`}>
                {day}
              </button>
            ))}
          </div>
        </div>
        {/* Affichage des classes pour le jour sélectionné */}
        <div>
          {scheduleData[selectedDay as keyof typeof scheduleData].map((classItem, index) => (
            <div key={index} className="pb-[2rem] ">
              <div className="container mx-auto px-4">
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3  bg-stone-200 border-none p-7'>
                  <div className='grid grid-cols-1 place-items-center text-center'>
                    <h1>Class Name</h1>
                    <h2 className="text-xl font-semibold">{classItem.className}</h2>
                  </div>
                  <div className='grid grid-cols-1 place-items-center text-center'>
                    <h1>Time</h1>
                    <p className="text-black font-semibold">{classItem.time}</p>
                  </div>
                  <div className='grid grid-cols-1 place-items-center text-center'>
                    <h1>Trainer</h1>
                    <p className="text-black font-semibold">{classItem.trainer}</p>
                  </div>
                  <Link href='/contact' className="mx-auto mx-w-[300px] px-7 py-3 font-bold text-center bg-slate-600 hover:bg-red-600 hover:text-white text-white rounded-full">Join Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>


  );
}

export default Schedule;
