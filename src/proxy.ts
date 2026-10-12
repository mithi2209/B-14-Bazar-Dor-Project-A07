

import { headers } from 'next/headers';
import { auth } from './lib/auth';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside

export async function proxy(request: NextRequest) {

  const session = await auth.api.getSession({
    headers: await headers()

  })

  // const session = await auth.api.getSession({
  //   headers: request.headers,
  // });

  const user = session?.user

  if(!user){
     return NextResponse.redirect(new URL('/signIn', request.url))
  }

  
  // to return exact detail page 
  //   const session = await auth.api.getSession({
  //   headers: request.headers,
  // });

  // if (!session?.user) {
  //   const signInUrl = new URL("/signIn", request.url);

    
  //   signInUrl.searchParams.set(
  //     "callbackURL",
  //     request.nextUrl.pathname + request.nextUrl.search
  //   );

  //   return NextResponse.redirect(signInUrl);
  // }

  // return NextResponse.next();

 
}
 
export const config = {
    matcher: ["/product/:id/:path*"],
}