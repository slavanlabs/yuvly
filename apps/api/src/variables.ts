import { AuthInstance } from "@workspace/better-auth/server"
import { getDB } from "@workspace/db";

type Session = Awaited<ReturnType<AuthInstance["api"]["getSession"]>>;

export type Variables = {
    session: Session;
    db: ReturnType<typeof getDB>
}