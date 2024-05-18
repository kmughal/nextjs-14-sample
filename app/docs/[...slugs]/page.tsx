// export const metadata = {
//     title : 'Docs Page',
//     description: 'This is a docs page'
// }

'use client';

import { useTheme } from "@/app/components/ThemeProvider";


export default function DocsPage({ params }: { params: { slugs: string[] } }) {
    const theme = useTheme();
    return <p style={{color: theme.color.primary}}>
        You are looking for document with slugs: {params.slugs.join('/')} - {new Date().toLocaleTimeString()}
    </p>
}