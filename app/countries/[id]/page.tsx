import { notFound } from "next/navigation";
import data from "../data/index.json";
import Image from "next/image";

export const generateMetadata = ({ params }: { params: { id: string } }) => {
    const search = data.find((c) => c.id === params.id);
    if (!search) return notFound();
    return {
        title: search.country,
        description: `Information about ${search.country}`
    }
}

export default function CountryPage({ params }: { params: { id: string } }) {
    const search = data.find((c) => c.id === params.id);

    if (!search) return notFound();
    return <div>
        <Image src={search.flag} alt={search.country} width={1000} height={1000} />
        <h1>{search.country}</h1>
        <p>Capital: {search.capital}</p>
        <p>Population: {search.population}</p>
        <p>Language: {search.language}</p>
        <p>Currency{search.currency}</p>
    </div>
}