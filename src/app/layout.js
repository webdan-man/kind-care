import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata = {
    title: "KindCare",
    description: "KindCare",
};


// export const viewport = {
//     width: '1440',
// }

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <body className={`${montserrat.variable} antialiased md:subpixel-antialiased`}>
                <div className="flex flex-col font-[family-name:var(--font-montserrat)] justify-between min-h-screen">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
