import { NextPageContext } from "next";
import data from "../data/index.json";
import fs from "fs";

export const dynamic = "force-dynamic";
export function GET() {
    return Response.json({ data });
}

export async function POST(request: Request) {
    const body = await request.json();
    const keys = [
        "country",
        "capital",
        "population",
        "currency",
        "language",
        "flag"
    ]
    if (data.find((c) => c.country === body.country)) return Response.json({ error: "Country already exists" }, { status: 400 })
    body.id = ((data || []).at(-1)!.id ?? 0) + 1;
    if (!body || keys.some(k => !(k in body))) return Response.json({ error: "No data provided" }, { status: 400 });

    data.push(body);
    fs.writeFileSync("./app/countries/data/index.json", JSON.stringify(data));
    return Response.json({ data });
}