import Breadcrumbs from "@/components/Breadcrumbs";
import Blog from "@/components/blog/Blog";

export default function BlogPage() {
    return (
        <main className="flex flex-col w-full justify-center">
            <Breadcrumbs title="Բլոգ" />
            <Blog />
        </main>
    );
}
