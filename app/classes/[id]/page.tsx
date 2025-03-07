"use client"; // Indique que ce composant est un Client Component

import { useRouter } from "next/navigation"; // Utilisez next/navigation au lieu de next/router
import Image from "next/image";
import classesBox from "@/helper/classesBox";

const ClassDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params; // Récupérer l'ID de la classe depuis les paramètres

  // Convertir l'ID en nombre
  const classId = parseInt(id);

  // Trouver la classe correspondante dans le tableau
  const cls = classesBox.find((c) => c.id === classId);

  if (!cls) {
    return <p>Class not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-[10rem] pb-[5rem]"> {/* Padding uniforme */}
        <div className="container mx-auto px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"> {/* Centrage horizontal et padding interne */}
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">{cls.title}</h1>
        <Image src={cls.image} alt={cls.title} className="w-full h-64 object-cover rounded-lg" />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Overview</h2>
          <p className="mt-2 text-gray-600">{cls.details.overview}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Benefits</h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {cls.details.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Schedule</h2>
          <p className="mt-2 text-gray-600">{cls.schedule}</p>
        </div>
        <button
          onClick={() => router.back()}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Back to Classes
        </button>
      </div>
    </div>
    </div>
  );
};

export default ClassDetails;