import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "DriveNow",
  description: "Rent your dream car today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <AuthProvider>
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#222222',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '16px 24px',
                borderRadius: '24px',
                fontSize: '14px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              },
              success: {
                iconTheme: {
                  primary: '#84cc16',
                  secondary: '#222222',
                },
              },
            }}
          />
          <Navbar />
          <main className="flex-grow pt-20 lg:pt-0">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}
