import { authOptions } from "@/app/_utils/ProviderOptions"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }