
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import ContactSticker from "@/components/ContactSticker";
import { Instrument_Sans, Inter } from "next/font/google";
import { siteMetadata } from "@/app/constants/metadata";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030303",
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${inter.variable} ${instrumentSans.variable}`}
    >
      <body
        className="bg-[#030303] text-white antialiased overflow-x-hidden selection:bg-blue-600/30"
        suppressHydrationWarning
      >
        <CustomCursor />
        
        {/* 1. Navbar ko fix kiya taake ye container ke mutabiq rahay */}
        <Navbar />

        {/* 2. Main Wrapper:
             Background ko full screen rakhne ke liye yahan max-width nahi lagayi.
             Scaling humne globals.css mein handle kar li hai.
        */}
        <main className="relative z-10 min-h-screen w-full max-w-[2560px] mx-auto">
    {/* {children}
</main>
        <main className="relative z-10 min-h-screen w-full flex flex-col items-center flex flex-col items-center w-full bg-[#030303]"> */}
          {/* Har page ka content yahan se guzray ga */}
          <div className="w-full">
            {children}
          </div>
        </main>

        <Footer />

        <WhatsAppBtn />
        <ContactSticker />
      </body>
    </html>
  );
}