import { Bindings } from "@workspace/types";
import { Hono } from "hono";
import { authMiddleware, dbMiddleware } from "../middleware";
import { Variables } from "../variables";
import { eq, user } from "@workspace/db";


const router = new Hono<{ Bindings: Bindings, Variables: Variables }>({ strict: false });

router.patch("/phonenumber", authMiddleware, dbMiddleware ,async (c) => {
    try {
        const body = await c.req.json();
        const { phonenumber } = body;

        const session = c.get("session");
        const db = c.get("db");
        await db.update(user).set({ phone: phonenumber }).where(eq(user.id, session?.user.id!));

        return c.json({ message: "Updated phonenumber"})

    } catch (error) {
        console.log("[PHONENUMBER_PATCH]", error);
        return c.json({ message: "Internal Server Error"}, 500)
    }
})

export default router;