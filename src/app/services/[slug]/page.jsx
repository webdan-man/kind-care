import Service1 from "@/components/services/Service1";
import Service2 from "@/components/services/Service2";
import Service3 from "@/components/services/Service3";
import Service4 from "@/components/services/Service4";
import Service5 from "@/components/services/Service5";
import Service6 from "@/components/services/Service6";
import Service7 from "@/components/services/Service7";
import Service8 from "@/components/services/Service8";

export default async function ServicePage({params}) {
    const { slug } = await params;

    if (slug === '2') {
        return <Service2 />
    }

    if (slug === '3') {
        return <Service3 />
    }

    if (slug === '4') {
        return <Service4 />
    }

    if (slug === '5') {
        return <Service5 />
    }

    if (slug === '6') {
        return <Service6 />
    }

    if (slug === '7') {
        return <Service7 />
    }

    if (slug === '8') {
        return <Service8 />
    }

    return <Service1 />;
}
