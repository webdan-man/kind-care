import Breadcrumbs from "@/components/Breadcrumbs";
import ContactUs from "@/components/contactUs/ContactUs";

export default function ContactUsPage() {
    return (
        <main className="flex flex-col w-full justify-center">
            <Breadcrumbs title="Կապ մեզ հետ" />
            <ContactUs />
        </main>
    );
}
