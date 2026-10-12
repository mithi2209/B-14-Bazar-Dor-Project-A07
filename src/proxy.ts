

// import { auth } from './lib/auth';
import { NextResponse } from 'next/server'

// import { headers } from 'next/headers';

import type { NextRequest } from 'next/server'

import { getSessionCookie } from "better-auth/cookies";

 
// // This function can be marked `async` if using `await` inside

export async function proxy(request: NextRequest) {

// .............method-1.......................

  // const session = await auth.api.getSession({
  //   headers: await headers()

  // });

  //   const user = session?.user

  //     if(!user){
  //       return NextResponse.redirect(new URL('/signIn', request.url))
  //     }

// ...................................................../
  // ..............method : 3.............
  

        if (!getSessionCookie(request)) {
        return NextResponse.redirect(new URL("/signIn", request.url));
      }
      return NextResponse.next();

// .................checking.............
   // console.log("PROXY session:", session?.user?.email, "| has cookie:",    request.headers.has("cookie"));
// ...................................................

//   // const session = await auth.api.getSession({
//   //   headers: request.headers,
//   // });



  
//  ...............to return exact detail page ............................
//   //   const session = await auth.api.getSession({
//   //   headers: request.headers,
//   // });

//   // if (!session?.user) {
//   //   const signInUrl = new URL("/signIn", request.url);

    
//   //   signInUrl.searchParams.set(
//   //     "callbackURL",
//   //     request.nextUrl.pathname + request.nextUrl.search
//   //   );

//   //   return NextResponse.redirect(signInUrl);
//   // }

//   // return NextResponse.next();

 
// }
 
// export const config = {
//     matcher: ["/product/:id/:path*"],
}