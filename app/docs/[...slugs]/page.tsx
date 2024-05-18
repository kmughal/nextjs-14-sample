export const metadata = {
    title : 'Docs Page',
    description: 'This is a docs page'
}

export default function DocsPage({ params }: { params: { slugs: string[] } }) {

    return <p>
        You are looking for document with slugs: {params.slugs.join('/')}
    </p>
}