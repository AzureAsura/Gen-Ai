// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const walletConnected = request.cookies.get('wallet-connected')?.value
  
//   if (request.nextUrl.pathname.startsWith('/referral')) {
//     if (walletConnected !== 'true') {
//       return NextResponse.redirect(new URL('/sign-in', request.url))
//     }
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/referral/:path*', '/dashboard/:path*', '/profile/:path*'],
// }