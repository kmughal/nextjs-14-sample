'use client';
import { notFound } from "next/navigation"

export default function BooksPage({ params }: { params: { bookId: string } }) {
    if (params.bookId.includes("bad-book")) return notFound();
    if (params.bookId === "error-book") throw new Error("Book error");

    return <p>
        You are looking for book with ID: {params.bookId}
    </p>
}