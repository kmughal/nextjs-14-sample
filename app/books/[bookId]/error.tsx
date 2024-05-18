'use client';

export default function ErrorBoundaryPage(error: Error) {
    return <p>
        An error occurred: {error.message ?? 'Unknown error'}
    </p>
}