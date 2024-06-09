 import { authMiddleware } from "@clerk/nextjs/server";

 export default authMiddleware();
 // publicRoutes: ['/']

 export const config = {
   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
 };

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };