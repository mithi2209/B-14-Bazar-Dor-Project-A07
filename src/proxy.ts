

import { getSessionCookie } from 'better-auth/cookies';
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'




 
// // This function can be marked `async` if using `await` inside

export async function proxy(request: NextRequest) {


  // .............method -2.................

  //  if (!getSessionCookie(request)) {
  //       return NextResponse.redirect(new URL("/signIn", request.url));
  //     }
  //     return NextResponse.next();



  // .....................method-3.................
    const sessionCookie = getSessionCookie(request);

      if (!sessionCookie) {
        return NextResponse.redirect(new URL("/signIn", request.url));
      }

      return NextResponse.next();



  // ................method-1............
  // try {
  //   const session = await auth.api.getSession({
  //     headers: request.headers,
  //   });

  //   if (!session?.user) {
  //     return NextResponse.redirect(
  //       new URL("/signIn", request.url)
  //     );
  //   }

  //   return NextResponse.next();
  // } catch (error) {
  //   console.error("Proxy session error:", error);

  //   return NextResponse.redirect(
  //     new URL("/signIn", request.url)
  //   );
  // }

}
 


export const config = {
    matcher: ["/product/:id/:path*"],
}