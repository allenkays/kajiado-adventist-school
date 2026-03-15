import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SiteContentProvider } from "@/components/SiteContentProvider";

export const metadata = {
  title: "Kajiado Adventist School & Rescue Center",
  description: "A Seventh-day Adventist institution offering holistic Christian education in Kajiado County.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <SiteContentProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SiteContentProvider>
      </body>
    </html>
  );
}
