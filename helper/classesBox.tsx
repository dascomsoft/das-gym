import Link from "next/link";
import Image from "next/image";
import fitness from "../images/fitness.jpg";
import boxing from "../images/boxing.jpg";
import body from "../images/body.jpg";
import running from "../images/running.jpg";
import crossfit from "../images/crossfit.jpg";
import yoga from "../images/yoga.jpg";

// Définir un type pour les classes
type ClassType = {
  id: number;
  title: string;
  image: any; // Utilisez `StaticImageData` si vous importez des images locales
  description: string;
  schedule: string;
  details: {
    overview: string;
    benefits: string[];
  };
};

// Données des classes
const classesBox: ClassType[] = [
  {
    id: 1,
    title: "FITNESS",
    image: fitness,
    description: "Elevate Your Wellness with Premier Fitness Solutions",
    schedule: "Wednesday: 9:00am-10:00am",
    details: {
      overview: "Our fitness classes are designed to help you achieve your wellness goals with expert guidance.",
      benefits: [
        "Improve cardiovascular health",
        "Build strength and endurance",
        "Boost mental clarity",
      ],
    },
  },
  {
    id: 2,
    title: "BOXING",
    image: boxing,
    description: "Unleash Your Inner Strength with Expert Boxing Training",
    schedule: "Tuesday: 11:00am-12:00am",
    details: {
      overview: "Join our boxing classes to learn self-defense and improve your physical fitness.",
      benefits: [
        "Enhance coordination and reflexes",
        "Burn calories and lose weight",
        "Build confidence and discipline",
      ],
    },
  },
  {
    id: 3,
    title: "WORKOUT",
    image: body,
    description: "Ignite Your Fitness Journey with Dynamic Workouts",
    schedule: "Thursday: 7:00am-8:00am",
    details: {
      overview: "Our dynamic workouts are perfect for all fitness levels.",
      benefits: [
        "Full-body workout",
        "Increase flexibility and mobility",
        "Fun and engaging sessions",
      ],
    },
  },
  {
    id: 4,
    title: "RUNNING",
    image: running,
    description: "Unleash Your Potential with Every Stride",
    schedule: "Monday: 6:00am-7:00am",
    details: {
      overview: "Join our running classes to improve your stamina and endurance.",
      benefits: [
        "Improve cardiovascular health",
        "Burn calories effectively",
        "Enjoy outdoor activities",
      ],
    },
  },
  {
    id: 5,
    title: "CROSSFIT",
    image: crossfit,
    description: "Unleash Your Potential with CrossFit",
    schedule: "Saturday: 9:00am-10:00am",
    details: {
      overview: "Our CrossFit classes are designed to challenge and inspire you.",
      benefits: [
        "Build strength and endurance",
        "Improve overall fitness",
        "Join a supportive community",
      ],
    },
  },
  {
    id: 6,
    title: "YOGA",
    image: yoga,
    description: "Find Balance and Inner Peace Through Yoga",
    schedule: "Sunday: 8:00am-10:00am",
    details: {
      overview: "Our yoga classes focus on mindfulness and physical well-being.",
      benefits: [
        "Improve flexibility and posture",
        "Reduce stress and anxiety",
        "Enhance mental clarity",
      ],
    },
  },
];


export default classesBox