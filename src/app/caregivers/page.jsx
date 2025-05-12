import Breadcrumbs from "@/components/Breadcrumbs";
import ContactUs from "@/components/home/ContactUs";
import Caregivers from "@/components/caregivers/Caregivers";

export default function CaregiversPage() {
    return (
        <main className="flex flex-col w-full justify-center">
            <Breadcrumbs title="Մեր խնամողներ" />
            <Caregivers />
            <ContactUs />
        </main>
    );
}
