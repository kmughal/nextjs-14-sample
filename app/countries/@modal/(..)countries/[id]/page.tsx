'use client';
import { notFound } from "next/navigation";
import data from "../../../data/index.json";
import Image from "next/image";
import { useState } from "react";

export default function CountryModal({ params }: { params: { id: string } }) {
    const [isOpen, setIsOpen] = useState(true);
    const search = data.find((c) => c.id === params.id);
    if (!search) return notFound();
    return (
        <div className="flex items-center justify-center h-screen">
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded"
                onClick={() => setIsOpen(true)}
            >
                Open Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
                    <div className="bg-white rounded shadow-lg w-1/3">
                        <header className="px-4 py-2 bg-black-200 border-b border-gray-300 rounded-t text-black">
                            <h2 className="text-lg">{search.country}</h2>
                        </header>

                        <main className="p-4">
                            <div>
                                <Image src={search.flag} alt={search.country} width={1000} height={1000} />
                                <h1>{search.country}</h1>
                                <p>Capital: {search.capital}</p>
                                <p>Population: {search.population}</p>
                                <p>Language: {search.language}</p>
                                <p>Currency{search.currency}</p>
                            </div>
                        </main>

                        <footer className="px-4 py-2 bg-gray-200 border-t border-gray-300 rounded-b">
                            <button
                                className="px-4 py-2 text-white bg-red-500 rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                Close Modal
                            </button>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
}