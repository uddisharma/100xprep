import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
    // const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    
    // const { pathname } = request.nextUrl;

    // if (token && (pathname === '/login' || pathname === '/register')) {
    //     return NextResponse.redirect(new URL('/', request.url));
    // }

    // if (!token && pathname.startsWith('/dashboard')) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }

    // if (pathname.startsWith('/admin')) {
    //     if (!token) {
    //         return NextResponse.redirect(new URL('/login', request.url));
    //     }

    //     if (token.role !== 'admin') {
    //         return NextResponse.redirect(new URL('/', request.url));
    //     }
    // }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/dashboard/:path*',
        '/login',
        '/register',
        '/admin/:path*'
    ]
};