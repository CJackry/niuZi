import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/trade')) {
//     console.log('req trade');
//     if (!request.cookies.has('id')) return NextResponse.redirect(new URL('/login', request.url));
//   }
//   return NextResponse.next();
// }

export function middleware(request: NextRequest) {
  if (!request.cookies.has('id')) return NextResponse.redirect(new URL('/login', request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ['/trade/:patch*'],
};
