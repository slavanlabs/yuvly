import { options } from "./options.js";
import { getDB } from "@workspace/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";

type Bindings = {
    DATABASE: string
}

export const auth = (env: Bindings) => {
    
    const db = getDB(env.DATABASE);
    return betterAuth({
        database: drizzleAdapter(db, {
            provider: "sqlite"
        }),
        ...options
    })
}