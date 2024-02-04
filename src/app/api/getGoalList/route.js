import { NextResponse } from "next/server";
import { kv } from '@vercel/kv';

export async function GET(request) {
    if (!request.params.name){
        return NextResponse.json(
            {
                body: request.body,
                path: request.nextUrl.pathname,
                query: request.nextUrl.search,
                cookies: request.cookies.getAll(),
            },
            {
                status: 200,
            },
        );
    }   
    const user = await kv.hgetall(`${request.params.name}`);
    return NextResponse.json(user);
}