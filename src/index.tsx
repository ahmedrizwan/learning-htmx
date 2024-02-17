import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Settings from "./settings";
import Home from "./home";
import { GridItem } from "./components/grid-item";
import { Toast } from "./components/toast";
import { InfiniteLoader } from "./components/infinite-loader";

const images = Array(30)
  .fill(0)
  .map((_, i) => ({
    id: i,
    url: "https://placehold.co/400",
    favorited: false,
  }));

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", async (c) => {
  return c.html(<Home />);
});

app.get("/images", async (c) => {
  const { page } = c.req.query();

  await new Promise((r) => setTimeout(r, 1000));

  return c.html(
    <>
      {images.map((image) => (
        <GridItem {...image} />
      ))}

      <InfiniteLoader page={parseInt(page) + 1} />
    </>
  );
});

app.put("/favorite", async (c) => {
  const { id } = c.req.query();

  const index = images.findIndex((image) => image.id.toString() === id);

  await new Promise((r) => setTimeout(r, 500));

  // if (index !== -1) {
  //   const image = images[index];
  //   image.favorited = !image.favorited;

  //   return c.html(<GridItem {...image} />);
  // }

  return c.html(<Toast text={`Action failed, please try again!`} />);
});

app.get("/settings", async (c) => {
  return c.html(<Settings />);
});

export default app;
