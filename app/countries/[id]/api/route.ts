import { NextRequest } from "next/server";
import data from "../../data/index.json";

export function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    console.log({ id, params })
    const search = data.find((c) => c.id === (id || params.id));
    if (!search) return Response.json({ error: "Country not found" }, { status: 404 });
    return Response.json({ data: search });
}
