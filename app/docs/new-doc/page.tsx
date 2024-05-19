'use client';
import { useFormState } from "react-dom";
import addNewDocument from "./actions/addNewDoc";

export default function AddDocumentPage() {
    const [state, formAction] = useFormState(addNewDocument, null);


    return <div>
        {state && <p> {state}</p>}
        <h1 className='text-center text-lg mb-10 font-medium'>Add a new document</h1>
        <form action={formAction} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="documentName" className="dark:text-white block text-sm font-medium">Title</label>
                <input type="text" name="documentName" className="bg-gray-50 dark:text-white border-gray-300 rounded-lg focus:ring-blue-300 p-2.5 w-full dark:bg-gray-700 dark:placeholder-gray-300 dark:focus:ring-gray-600" />
            </div>
            <div className="mb-5">
                <label htmlFor="authorName">Author</label>
                <input type="text" name="authorName" className="bg-gray-50 dark:text-white border-gray-300 rounded-lg focus:ring-blue-300 p-2.5 w-full dark:bg-gray-700 dark:placeholder-gray-300 dark:focus:ring-gray-600" />
            </div>
            <div className="mb-5">
                <label htmlFor="publishDate">Date of publish</label>
                <input type="date" name="publishDate" className="bg-gray-50 dark:text-white border-gray-300 rounded-lg focus:ring-blue-300 p-2.5 w-full dark:bg-gray-700 dark:placeholder-gray-300 dark:focus:ring-gray-600" />
            </div>
            <div className="mb-5">
                <input type="submit" value="Add document" className="text-white rounded-lg p-2.5 bg-blue-500 text-sm ms-2 hover:bg-lime-200 hover:text-neutral-800 focus:ring-blue-500 mr-5 cursor-pointer" />
                <input type="reset" value="Reset" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" />
            </div>
        </form>
    </div>
}