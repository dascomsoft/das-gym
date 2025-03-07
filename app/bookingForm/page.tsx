"use client";

import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Firebase
import { sendEmail } from "../../utils/sendEmail";
import { auth } from "../../firebaseConfig"; // Firebase Authentication
import { onAuthStateChanged } from "firebase/auth";

const BookingForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); // Stocke l'email de l'utilisateur connecté
    const [phone, setPhone] = useState("");
    const [gymClass, setGymClass] = useState("");
    const [selectedDay, setSelectedDay] = useState(""); // Ajout du jour sélectionné
    const [selectedTime, setSelectedTime] = useState(""); // Ajout de l'heure sélectionnée
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // ✅ Vérifie l'utilisateur connecté et récupère son email
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email || ""); // Stocke l'email
            } else {
                setEmail(""); // Aucune session active
            }
        });

        return () => unsubscribe(); // Nettoyage du listener
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!email) {
            alert("Vous devez être connecté pour réserver.");
            setLoading(false);
            return;
        }

        try {
            // 1️⃣ Sauvegarde dans Firebase
            await addDoc(collection(db, "bookings"), {
                name,
                email,
                phone,
                gymClass,
                selectedDay, // Ajout du jour sélectionné
                selectedTime, // Ajout de l'heure sélectionnée
                createdAt: new Date(),
            });

            console.log("📌 Réservation enregistrée");

            // 2️⃣ Envoi de l’email de confirmation
            await sendEmail(name, email, gymClass);

            // ✅ Affichage de la validation
            setSuccess(true);

            // 3️⃣ Réinitialisation du formulaire après confirmation (sauf email)
            setName("");
            setPhone("");
            setGymClass("");
            setSelectedDay("");
            setSelectedTime("");
        } catch (error) {
            console.error("❌ Erreur lors de la réservation:", error);
            alert("Erreur lors de la réservation, réessaye plus tard.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-stone-300 max-h-screen pt-[10rem] pb-[4rem] text-black">
            <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-80">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 border rounded" />
                    
                    {/* Champ email en lecture seule */}
                    <input type="email" value={email} disabled required className="p-2 border rounded bg-gray-200 cursor-not-allowed" />

                    <input type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="p-2 border rounded" />
                    
                    <select
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        value={gymClass}
                        onChange={(e) => setGymClass(e.target.value)}
                        required
                    >
                        <option value="">Select a class</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Boxe">Boxe</option>
                        <option value="Musculation">Musculation</option>
                        <option value="Zumba">Zumba</option>
                    </select>

                    {/* Sélection du jour de la semaine */}
                    <select
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        required
                    >
                        <option value="">Select a day</option>
                        <option value="Lundi">Monday</option>
                        <option value="Mardi">Tuesday</option>
                        <option value="Mercredi">Wednesday</option>
                        <option value="Jeudi">Thursday</option>
                        <option value="Vendredi">Friday</option>
                        <option value="Samedi">Saturday</option>
                        <option value="Dimanche">Sunday</option>
                    </select>

                    {/* Sélection de l'heure */}
                    <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-gray-600">Select time</label>
                    <input
                        type="time"
                        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        required
                    />
                    </div>

                    <button type="submit" disabled={loading} className="p-2 bg-blue-500 text-white rounded">
                        {loading ? "Registration..." : "Register"}
                    </button>
                </form>

                {/* ✅ MODAL DE CONFIRMATION */}
                {success && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-xl font-bold text-green-600">✅ Registration succeed !</h2>
                            <p className="mt-2 text-gray-600">
                                Your registration has been submitted!!.
                            </p>
                            <button 
                                onClick={() => setSuccess(false)} 
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingForm;
