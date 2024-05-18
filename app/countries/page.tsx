import Image from "next/image";
import data from "./data/index.json";
import Link from "next/link";

export default function CountriesPage() {
    return <div>
        <h1>Countries</h1>
        <section className="flex">
            {data.map((country) => (
                <article key={country.country} className="w-60 h-96 gap-10 m-10 border-red-100 border-10 border-dashed">
                    <Image src={country.flag} alt={country.country} width={500} height={500} />
                    <Link href={"/countries/" + country.id}>{country.country}</Link>
                </article>
            ))}
        </section>
    </div>
}