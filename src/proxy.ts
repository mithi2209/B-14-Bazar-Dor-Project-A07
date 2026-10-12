

import { auth } from './lib/auth';
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'



 
// // This function can be marked `async` if using `await` inside

export async function proxy(request: NextRequest) {

  const session = await auth.api.getSession({
      headers: request.headers,
    });

  //  go to sign-in page
    if (!session?.user) {
      return NextResponse.redirect(
        new URL("/signIn", request.url)
      );
    }

    //  allow the product page
    return NextResponse.next();

 
 }
 
export const config = {
    matcher: ["/product/:id/:path*"],
}