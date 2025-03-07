

// "use client";
// import { useEffect, useState } from "react";
// import { auth, db } from "../../firebaseConfig";
// import { doc, getDoc, collection, query, where, getDocs, deleteDoc, addDoc } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";

// const Profile = () => {
//   const [userData, setUserData] = useState<any>(null);
//   const [bookings, setBookings] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isBooking, setIsBooking] = useState(false); // État pour le spinner

//   // Predefined options
//   const gymClasses = ["Yoga", "Cycling", "Lifting", "Pilates", "Zumba"];
//   const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//   const timeSlots = ["06:00", "07:00", "08:00", "09:00", "10:00", "17:00", "18:00", "19:00"];

//   // Convert time to 12-hour format (AM/PM)
//   const formatTime = (time: string) => {
//     const [hour, minute] = time.split(":");
//     const hourNum = parseInt(hour, 10);
//     const period = hourNum >= 12 ? "PM" : "AM";
//     const formattedHour = hourNum % 12 || 12; // Convert 0 to 12 for midnight
//     return `${formattedHour}:${minute} ${period}`;
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         console.log("✅ User logged in:", user.uid);

//         // Fetch user data
//         const userDocRef = doc(db, "users", user.uid);
//         const userDocSnap = await getDoc(userDocRef);

//         if (userDocSnap.exists()) {
//           setUserData({ id: user.uid, ...userDocSnap.data() });

//           // Fetch user bookings
//           const bookingsQuery = query(collection(db, "bookings"), where("userId", "==", user.uid));
//           const bookingsSnapshot = await getDocs(bookingsQuery);

//           if (!bookingsSnapshot.empty) {
//             const userBookings = bookingsSnapshot.docs.map((doc) => ({
//               id: doc.id,
//               ...doc.data(),
//             }));
//             console.log("User bookings:", userBookings);
//             setBookings(userBookings);
//           } else {
//             console.log("No bookings found for this user.");
//           }
//         } else {
//           console.log("No user document found.");
//         }
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // Delete a booking
//   const deleteBooking = async (id: string) => {
//     try {
//       await deleteDoc(doc(db, "bookings", id));
//       setBookings(bookings.filter((booking) => booking.id !== id));
//       console.log("✅ Booking deleted:", id);
//     } catch (error) {
//       console.error("❌ Error deleting booking:", error);
//     }
//   };

//   // Add a booking
//   const createBooking = async (gymClass: string, selectedDay: string, selectedTime: string) => {
//     if (!userData) {
//       console.error("⚠️ No user logged in!");
//       return;
//     }

//     setIsBooking(true); // Activer le spinner

//     try {
//       await addDoc(collection(db, "bookings"), {
//         userId: userData.id, // 🔥 Automatically add userId
//         name: userData.name,
//         email: userData.email,
//         phone: userData.phone,
//         gymClass,
//         selectedDay,
//         selectedTime,
//         createdAt: new Date(), // 📅 Timestamp
//       });
//       console.log("✅ Booking added!");

//       // Reload bookings after adding
//       const bookingsQuery = query(collection(db, "bookings"), where("userId", "==", userData.id));
//       const bookingsSnapshot = await getDocs(bookingsQuery);
//       const userBookings = bookingsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setBookings(userBookings);
//     } catch (error) {
//       console.error("❌ Error adding booking:", error);
//     } finally {
//       setIsBooking(false); // Désactiver le spinner
//     }
//   };

//   // Spinner de chargement
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
//       </div>
//     );
//   }

//   if (!userData) return <p>You must be logged in.</p>;

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
//       <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg p-8">
//         {/* Header */}
//         <div className="text-center mt-10">
//           <h1 className="text-3xl font-bold text-indigo-600">Hello, {userData?.name}!</h1>
//           <p className="mt-2 text-lg text-gray-600">Welcome to your personal space.</p>
//         </div>

//         {/* Two-column layout */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left column: Booking form */}
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800">Book a Class</h2>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const formData = new FormData(e.target as HTMLFormElement); // Caster e.target en HTMLFormElement
//                 const gymClass = formData.get("gymClass");
//                 const selectedDay = formData.get("selectedDay");
//                 const selectedTime = formData.get("selectedTime");
//                 if (gymClass && selectedDay && selectedTime) {
//                   createBooking(gymClass.toString(), selectedDay.toString(), selectedTime.toString());
//                 }
//               }}
//               className="space-y-4 mt-4"
//             >
//               {/* Class */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Class</label>
//                 <select
//                   name="gymClass"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
//                   required
//                 >
//                   <option value="" className="text-gray-400">Select a class</option>
//                   {gymClasses.map((gymClass) => (
//                     <option key={gymClass} value={gymClass} className="text-black">
//                       {gymClass}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Day */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Day</label>
//                 <select
//                   name="selectedDay"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
//                   required
//                 >
//                   <option value="" className="text-gray-400">Select a day</option>
//                   {daysOfWeek.map((day) => (
//                     <option key={day} value={day} className="text-black">
//                       {day}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Time */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Time</label>
//                 <select
//                   name="selectedTime"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
//                   required
//                 >
//                   <option value="" className="text-gray-400">Select a time</option>
//                   {timeSlots.map((time) => (
//                     <option key={time} value={time} className="text-black">
//                       {formatTime(time)}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Submit button */}
//               <button
//                 type="submit"
//                 disabled={isBooking} // Désactiver le bouton pendant le chargement
//                 className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
//               >
//                 {isBooking ? (
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                 ) : (
//                   "Book Now"
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Right column: Booking list */}
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-800">📅 My Bookings</h2>
//             {bookings.length === 0 ? (
//               <p className="mt-4 text-gray-600">No bookings found.</p>
//             ) : (
//               <div className="mt-4 space-y-4">
//                 {bookings.map((booking) => (
//                   <div key={booking.id} className="bg-gray-50 p-4 rounded-lg">
//                     <p className="text-lg font-medium text-gray-800">{booking.gymClass}</p>
//                     <p className="text-gray-600">
//                       {booking.selectedDay} at {formatTime(booking.selectedTime)}
//                     </p>
//                     <button
//                       onClick={() => deleteBooking(booking.id)}
//                       className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* WhatsApp Button */}
//         <div className="mt-8 text-center">
//           <a
//             href="https://wa.me/1234567890" // Remplacez par le numéro de téléphone du club Gym
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-6 h-6 mr-2"
//             >
//               <path d="M12 2a10 10 0 0 1 8.17 15.76l-1.45 4.26a1 1 0 0 1-1.27.65l-4.26-1.45A10 10 0 1 1 12 2zm0 2a8 8 0 0 0-6.93 12l.23.68-1.45 4.26 4.26-1.45.68.23A8 8 0 1 0 12 4zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-3-8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
//             </svg>
//             Contact us on WhatsApp
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, collection, query, where, getDocs, deleteDoc, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBooking, setIsBooking] = useState(false); // État pour le spinner

  // Predefined options
  const gymClasses = ["Yoga", "Cycling", "Lifting", "Pilates", "Zumba"];
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const timeSlots = ["06:00", "07:00", "08:00", "09:00", "10:00", "17:00", "18:00", "19:00"];

  // Convert time to 12-hour format (AM/PM)
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const hourNum = parseInt(hour, 10);
    const period = hourNum >= 12 ? "PM" : "AM";
    const formattedHour = hourNum % 12 || 12; // Convert 0 to 12 for midnight
    return `${formattedHour}:${minute} ${period}`;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("✅ User logged in:", user.uid);

        // Fetch user data
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserData({ id: user.uid, ...userDocSnap.data() });

          // Fetch user bookings
          const bookingsQuery = query(collection(db, "bookings"), where("userId", "==", user.uid));
          const bookingsSnapshot = await getDocs(bookingsQuery);

          if (!bookingsSnapshot.empty) {
            const userBookings = bookingsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("User bookings:", userBookings);
            setBookings(userBookings);
          } else {
            console.log("No bookings found for this user.");
          }
        } else {
          console.log("No user document found.");
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Delete a booking
  const deleteBooking = async (id: string) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      setBookings(bookings.filter((booking) => booking.id !== id));
      console.log("✅ Booking deleted:", id);
    } catch (error) {
      console.error("❌ Error deleting booking:", error);
    }
  };

  // Add a booking
  const createBooking = async (gymClass: string, selectedDay: string, selectedTime: string) => {
    if (!userData) {
      console.error("⚠️ No user logged in!");
      return;
    }

    setIsBooking(true); // Activer le spinner

    try {
      await addDoc(collection(db, "bookings"), {
        userId: userData.id, // 🔥 Automatically add userId
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        gymClass,
        selectedDay,
        selectedTime,
        createdAt: new Date(), // 📅 Timestamp
        trainerResponse: "", // Réponse du trainer (vide par défaut)
        trainerName: "", // Nom du trainer (vide par défaut)
        trainerPhone: "", // Téléphone du trainer (vide par défaut)
        respondedAt: null, // Date de réponse (vide par défaut)
      });
      console.log("✅ Booking added!");

      // Reload bookings after adding
      const bookingsQuery = query(collection(db, "bookings"), where("userId", "==", userData.id));
      const bookingsSnapshot = await getDocs(bookingsQuery);
      const userBookings = bookingsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(userBookings);
    } catch (error) {
      console.error("❌ Error adding booking:", error);
    } finally {
      setIsBooking(false); // Désactiver le spinner
    }
  };

  // Spinner de chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!userData) return <p>You must be logged in.</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold text-indigo-600">Hello, {userData?.name}!</h1>
          <p className="mt-2 text-lg text-gray-600">Welcome to your personal space.</p>
        </div>

        {/* Two-column layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column: Booking form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Book a Class</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement); // Caster e.target en HTMLFormElement
                const gymClass = formData.get("gymClass");
                const selectedDay = formData.get("selectedDay");
                const selectedTime = formData.get("selectedTime");
                if (gymClass && selectedDay && selectedTime) {
                  createBooking(gymClass.toString(), selectedDay.toString(), selectedTime.toString());
                }
              }}
              className="space-y-4 mt-4"
            >
              {/* Class */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Class</label>
                <select
                  name="gymClass"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="" className="text-gray-400">Select a class</option>
                  {gymClasses.map((gymClass) => (
                    <option key={gymClass} value={gymClass} className="text-black">
                      {gymClass}
                    </option>
                  ))}
                </select>
              </div>

              {/* Day */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Day</label>
                <select
                  name="selectedDay"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="" className="text-gray-400">Select a day</option>
                  {daysOfWeek.map((day) => (
                    <option key={day} value={day} className="text-black">
                      {day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <select
                  name="selectedTime"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                  required
                >
                  <option value="" className="text-gray-400">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="text-black">
                      {formatTime(time)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isBooking} // Désactiver le bouton pendant le chargement
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center justify-center"
              >
                {isBooking ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  "Book Now"
                )}
              </button>
            </form>
          </div>

          {/* Right column: Booking list */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">📅 My Bookings</h2>
            {bookings.length === 0 ? (
              <p className="mt-4 text-gray-600">No bookings found.</p>
            ) : (
              <div className="mt-4 space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-lg font-medium text-gray-800">{booking.gymClass}</p>
                    <p className="text-gray-600">
                      {booking.selectedDay} at {formatTime(booking.selectedTime)}
                    </p>
                    {booking.trainerResponse && (
                      <div className="mt-2">
                        <p className="text-green-600">
                          <strong>Trainer's response:</strong> {booking.trainerResponse}
                        </p>
                        <p className="text-gray-600">
                          <strong>Trainer:</strong> {booking.trainerName} ({booking.trainerPhone})
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/1234567890" // Remplacez par le numéro de téléphone du club Gym
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path d="M12 2a10 10 0 0 1 8.17 15.76l-1.45 4.26a1 1 0 0 1-1.27.65l-4.26-1.45A10 10 0 1 1 12 2zm0 2a8 8 0 0 0-6.93 12l.23.68-1.45 4.26 4.26-1.45.68.23A8 8 0 1 0 12 4zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-3-8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
            </svg>
            Contact us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;