import Breadcrumbs from "@/components/Breadcrumbs";
import ContactUs from "@/components/home/ContactUs";

export default function Layout({ children }) {
  return (
      <main className="flex flex-col w-full justify-center">
          <Breadcrumbs title="Մեր ծառայությունները"/>
          {children}
          <ContactUs />
      </main>
  );
}
