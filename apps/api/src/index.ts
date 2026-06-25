import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { Bindings } from "@workspace/types"
import auth from "./routes/auth";

const app = new Hono<{ Bindings: Bindings }>({ strict: false });

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowHeaders: ["Content-Type", "Authorization", "Cookie"],
    exposeHeaders: ["Set-Cookie"],
    credentials: true,
  }),
);

app.get('/', (c) => {
  return c.text("Healthy")
});

const api = app.basePath("/api/v1");
api.route("/auth", auth)

export default {
  fetch: app.fetch
}
