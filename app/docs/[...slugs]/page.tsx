export default function DocsPage({ params }: { params: { slugs: string[] } }) {

    return <p>
        You are looking for document with slugs: {params.slugs.join('/')}
    </p>
}