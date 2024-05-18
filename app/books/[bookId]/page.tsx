'use client';
import { useTheme } from "@/app/components/ThemeProvider";
import { notFound } from "next/navigation"

export default function BooksPage({ params }: { params: { bookId: string } }) {
    const theme = useTheme();
    if (params.bookId.includes("bad-book")) return notFound();
    if (params.bookId === "error-book") throw new Error("Book error");

    return <p style={{ color: theme.color.primary }}>
        You are looking for book with ID: {params.bookId}
    </p>
}