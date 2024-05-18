import Link from "next/link";

export default function OrdersPage() {
    return <div className="h-96 gap-10 ml-5 border-dashed border-4 rounded shadow-lg">
        Welcome to orders!
        <Link href="/stocks/pencil">Pencil</Link>
    </div>
}