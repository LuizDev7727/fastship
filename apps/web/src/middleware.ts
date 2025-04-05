import { type NextRequest, NextResponse } from 'next/server'

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/auth/sign-in'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isSignInPage = request.nextUrl.pathname === '/auth/sign-in'
  const isSignUpPage = request.nextUrl.pathname === '/auth/sign-up'
  const authToken = request.cookies.get('fastship-token')

  const isPrivateRoute = path.startsWith('/dashboard')

  if (!authToken && !isPrivateRoute) {
    return NextResponse.next()
  }

  if (!authToken && isPrivateRoute) {
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && !isPrivateRoute && (isSignInPage || isSignUpPage)) {
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = '/dashboard'

    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && !isPrivateRoute) {
    //Checkar se o jwt não está expirado
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
