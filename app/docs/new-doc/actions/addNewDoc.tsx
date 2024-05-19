
"use server";

import connect from "@/models/document";
import z from 'zod';

const addNewDocument = async (previousState: any, document: FormData) => {
    const Document = await connect();
    const schema = z.object({
        authorName: z.string().min(10),
        documentName: z.string().min(10),
        publishDate: z.date()
    });

    const authorName = document.get('authorName');
    const documentName = document.get('documentName');
    const publishDate = new Date(document.get('publishDate') as string);

    const parsingResult = schema.safeParse({ authorName, documentName, publishDate });
    if (!parsingResult.success) {

        return JSON.stringify(parsingResult.error);
    }
    if (Document) {
        const instance = await Document.create({ authorName, documentName, publishDate });
        const result = await instance.save();
        return 'Document added successfully with id ' + result.toJSON().id;
    }
    return '';
}

export default addNewDocument;