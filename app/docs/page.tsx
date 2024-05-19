import connect from "@/models/document";
import Link from "next/link";



export default async function DocumentMainPage() {
    const Documents = await connect();
    const allDocuments = await Documents?.findAll();

    return <div>
        <Link className="text:white" href="/docs/new-doc">Add new document</Link>
        <h1 className='text-center text-lg mb-10 font-medium'>Welcome to the document management system</h1>
        <p className='text-center text-sm'>Please select an option from the sidebar to proceed</p>
        {allDocuments && <ol>
            {allDocuments.map((doc: any) => <li key={doc.id}>
                {doc.authorName} wrote
                {doc.documentName} on {doc.publishDate.toString()}
            </li>)}
        </ol>}
    </div>
}