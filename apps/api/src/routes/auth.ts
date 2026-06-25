import { Hono } from "hono";
import { Bindings } from "@workspace/types";
import { auth } from "@workspace/better-auth/server"

const router = new Hono<{ Bindings: Bindings }>();

router.on(["POST", "GET", "OPTIONS"], "/*", (c) => {
    return auth(c.env).handler(c.req.raw);
})
export default router;