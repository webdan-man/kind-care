import Script from 'next/script';
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicViewportSetter from "@/components/DynamicViewportSetter";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata = {
    title: "Բարի Խնամք - Տնային Խնամքի Կազմակերպություն",
    description: "Բարի Խնամքը ապահովում է անվտանգ և հետևողական խնամք ձեր սիրելիի համար, քանի որ նրանք ծերանում են, որը մատուցվում է տանը՝ հարմարավետ և թափանցիկ:",
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true} lang="en">
        <body className={`${montserrat.variable} antialiased md:subpixel-antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-2TW7QE1H6D"
            strategy="afterInteractive"
        />
        <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2TW7QE1H6D', {
            page_path: window.location.pathname,
          });
        `,
            }}
        />
        <DynamicViewportSetter/>
        <div className="flex flex-col font-[family-name:var(--font-montserrat)] justify-between min-h-screen">
            <Header/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
