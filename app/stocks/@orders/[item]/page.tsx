import Link from "next/link";

export default function ItemPage({ params }: { params: { item: string } }) {
    return <p>
        You are looking for item with ID: {params.item}
        <Link href="/stocks" className="text-blue ml-5 hover:text-green-100">Default Page</Link>
    </p>
}