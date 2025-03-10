

"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // 🔹 Icône de chargement

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [role, setRole] = useState<"user" | "trainer">("user"); // Nouveau champ pour le rôle
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // Fonction d'inscription et sauvegarde des données dans Firestore
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Sauvegarder les données dans Firestore en fonction du rôle
      if (role === "user") {
        await setDoc(doc(db, "users", user.uid), {
          name,
          email,
          phone,
          role,
          createdAt: new Date().toISOString(),
        });
      } else if (role === "trainer") {
        await setDoc(doc(db, "trainers", user.uid), {
          name,
          email,
          phone,
          role,
          createdAt: new Date().toISOString(),
        });
      }

      setSuccess(true);
      setEmail("");
      setPassword("");
      setName("");
      setPhone("");
      setRole("user"); // Réinitialiser le rôle
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please chose another one.");
      } else if (err.code === "auth/invalid-email") {
        setError("The provided email is invalid.");
      } else if (err.code === "auth/weak-password") {
        setError("Password too short. Please use at least 6 characters!!!.");
      } else {
        setError("Error. Please start again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-stone-300 min-h-screen flex items-center justify-center pt-[8.5rem] pb-[3rem]">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-4 text-black">Register</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md mt-1 text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md mt-1 text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded-md mt-1 text-black"
                required
                placeholder="Ex: +237677888999"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md mt-1 text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-semibold text-gray-600">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as "user" | "trainer")}
                className="w-full p-2 border rounded-md mt-1 text-black"
                required
              >
                <option value="user">User</option>
                <option value="trainer">Trainer</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 disabled:bg-blue-300 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin text-xl" />
                  Chargement...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          <p className="text-center mt-4 text-black">
            Do you have an account ?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here !!
            </Link>
          </p>
        </div>
      </div>

      {/* Message de confirmation */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-bold text-green-600">Successful registration !</h2>
            <p className="mt-2 text-gray-600">Your account has been created.</p>
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
  );
};

export default Register;
