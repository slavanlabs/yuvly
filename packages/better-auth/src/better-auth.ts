import { getDB } from "@workspace/db"
import { Bindings } from "@workspace/types"
import { customSession } from "better-auth/plugins"
import { betterAuth, BetterAuthOptions } from "better-auth"
import { drizzleAdapter } from "@better-auth/drizzle-adapter"

const getOptions = (env: Bindings) => {
  const db = getDB(env.DATABASE)

  return {
    database: drizzleAdapter(db, {
      provider: "sqlite",
    }),
    baseURL: env.BETTER_AUTH_URL,
    basePath: env.BETTER_AUTH_BASEPATH,
    secret: env.BETTER_AUTH_SECRET,
    trustedOrigins: ["http://localhost:3000"],
    socialProviders: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },
    user: {
      additionalFields: {
        phone: {
          type: "string",
          defaultValue: null,
          input: false,
          fieldName: "phone",
        },
      },
    },
    advanced: {
      defaultCookieAttributes: {
        sameSite: "Lax",
        secure: false,
        httpOnly: true,
      },
    },
  } satisfies BetterAuthOptions
}

export const auth = (env: Bindings) => {
  const options = getOptions(env)
  return betterAuth({
    ...options,
    plugins: [
      customSession(
        async ({ user, session }) => ({
          user: {
            ...user,
            phone: user.phone ?? null,
          },
          session,
        }),
        options
      ),
    ],
  })
}

export type AuthInstance = ReturnType<typeof auth>
