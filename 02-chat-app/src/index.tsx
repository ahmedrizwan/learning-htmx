import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Home from "./home";
import Room from "./room";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", async (c) => {
  return c.html(<Home />);
});

app.get("/room", async (c) => {
  const { username } = c.req.query();

  return c.html(<Room />);
});

export default app;
