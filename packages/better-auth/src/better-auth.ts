import { options } from "./options.js";
import { getDB } from "@workspace/db";
import { betterAuth } from "better-auth";
import { Bindings } from "@workspace/types"
import { drizzleAdapter } from "@better-auth/drizzle-adapter";

export const auth = (env: Bindings) => {
    
    const db = getDB(env.DATABASE);
    return betterAuth({
        database: drizzleAdapter(db, {
            provider: "sqlite"
        }),
        baseURL: env.BETTER_AUTH_URL,
        basePath: env.BETTER_AUTH_BASEPATH,
        secret: env.BETTER_AUTH_SECRET,
        trustedOrigins: ["http://localhost:3000"],
        socialProviders: {
            google: {
                clientId: env.GOOGLE_CLIENT_ID,
                clientSecret: env.GOOGLE_CLIENT_SECRET
            }
        }
    });
}