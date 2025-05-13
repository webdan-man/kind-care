import Hero from "@/components/home/Hero";
import Health from "@/components/home/Health";
import Services from "@/components/home/Services";
import WhyWe from "@/components/home/WhyWe";
import HowWeWork from "@/components/home/HowWeWork";
import Quality from "@/components/home/Quality";
import Questions from "@/components/home/Questions";
import ContactUs from "@/components/home/ContactUs";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
        <Hero />
        <Health />
        <Services />
        <WhyWe />
        <HowWeWork />
        <Quality />
        <Questions />
        <ContactUs />
    </main>
);
}
