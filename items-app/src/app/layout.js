import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
