

// import { auth } from './lib/auth';
import { getSessionCookie } from 'better-auth/cookies';
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import { auth } from './lib/auth';



 
// // This function can be marked `async` if using `await` inside

export async function proxy(request: NextRequest) {


  // .............method -2.................

  //  if (!getSessionCookie(request)) {
  //       return NextResponse.redirect(new URL("/signIn", request.url));
  //     }
  //     return NextResponse.next();





  // ................method-1............
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session?.user) {
      console.log("No valid session:", request.nextUrl.pathname);

      return NextResponse.redirect(
        new URL("/signIn", request.url)
      );
    }

    return NextResponse.next();
 
 }
 


export const config = {
    matcher: ["/product/:id/:path*"],
}