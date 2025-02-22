import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

app.get("/", (c) => c.text("Hono!"));

export const hello = () => handle(app);
