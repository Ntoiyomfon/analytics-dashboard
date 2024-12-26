import { NextRequest, NextResponse } from "next/server";

interface ExtendedNextRequest extends NextRequest {
    geo?: {
        country?: string;
    };
}
import { analytics } from "./utils/analytics";


export default async function middleware(req: ExtendedNextRequest) {
    if(req.nextUrl.pathname === '/') {
        //Track analytics events 

        try {
            analytics.track('pageview', {
              page: '/',
              country: req.geo?.country,
            })
        } catch (err) {
            // fail silently
            console.error(err)
        }
    }

    return NextResponse.next()
}

export const matcher = {
    matcher: ['/'],
}
