


// "use client"; 

// import { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { Outfit } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { metadata } from "@/utils/metadata";



// const outfit = Outfit({ subsets: ["latin"] });



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [showOnboarding, setShowOnboarding] = useState(true);
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");

//     if (hasSeenOnboarding) {
//       setShowOnboarding(false);
//     } else {
//       localStorage.setItem("hasSeenOnboarding", "true");
//     }
//   }, []);

//   useEffect(() => {
//     if (showOnboarding && pathname !== "/onboarding") {
//       router.push("/onboarding");
//     }
//   }, [showOnboarding, pathname, router]);

//   return (
//     <html lang="en">
//       <body className={outfit.className}>
//         {showOnboarding && pathname !== "/" ? null : (
//           <>
//             <Navbar />
//             {children}
//             <Footer />
//           </>
//         )}
//       </body>
//     </html>
//   );
// }




"use client"; 

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


