

"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fonction de connexion
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Connexion avec email et mot de passe
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Récupérer le rôle de l'utilisateur depuis Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const trainerDoc = await getDoc(doc(db, "trainers", user.uid));

      if (userDoc.exists()) {
        // Rediriger vers la page de profil utilisateur
        window.location.href = "/profile";
      } else if (trainerDoc.exists()) {
        // Rediriger vers la page de profil entraîneur
        window.location.href = "/trainerProfile";
      } else {
        setError("User role not found.");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-stone-300 max-h-screen flex items-center justify-center pt-[10rem] pb-[4rem]">
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">Login here</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="text-red-500">Erreure lors de la connection</p>}

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md mt-1 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md mt-1 text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? "Chargement..." : "Connect"}
          </button>
        </form>

        <p className="text-center mt-4 text-black">
          If you do not have an account ?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here !!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;