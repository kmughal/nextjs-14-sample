import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {

    const response = NextResponse.next();
    console.log({response})
    if (!response.cookies.get("theme")) {
        response.cookies.set("theme", "dark");
    }
    return response;
}

export const config = {
    matcher: '/stocks'
}