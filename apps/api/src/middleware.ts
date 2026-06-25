import { auth } from "@workspace/better-auth/server";
import { getDB } from "@workspace/db";
import { Bindings } from "@workspace/types";
import { createMiddleware } from "hono/factory";
import { Variables } from "./variables";

export const authMiddleware = createMiddleware<{ Bindings: Bindings, Variables: Variables }>(async (c, next) => {
    const betterAuth = auth(c.env);
    const session = await betterAuth.api.getSession({ headers: c.req.raw.headers });
    
    if(!session) {
        return c.json({ message: "UNAUTHORIZED" }, 401);
    }

    c.set("session", session);
    return next();
});

export const dbMiddleware = createMiddleware<{ Bindings: Bindings, Variables: Variables }>(async (c, next) => {
    const db = getDB(c.env.DATABASE as unknown as D1Database);
    c.set('db', db)
    return next();
})