import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./pages/Navbar/Navbar";
import { Footer } from "./pages/Footer/Footer";
import { FirebaseProvider } from "../context/Firebase";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Exchange",
  description: "The best way to exhange your books",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-cover relative selection:text-pink-500 selection:bg-muted ${inter.className}`}
      >
        <FirebaseProvider>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </FirebaseProvider>
      </body>
    </html>
  );
}
