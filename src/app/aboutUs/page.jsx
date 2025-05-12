import Breadcrumbs from "@/components/Breadcrumbs";
import AboutUs from "@/components/aboutUs/AboutUs";

export default function AboutUsPage() {
    return (
        <main className="flex flex-col w-full justify-center">
            <Breadcrumbs title="Մեր մասին" />
            <AboutUs />
        </main>
    );
}
