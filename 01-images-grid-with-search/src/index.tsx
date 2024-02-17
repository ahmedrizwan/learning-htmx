import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Settings from "./settings";
import Home from "./home";
import { GridItem } from "./components/grid-item";
import { Toast } from "./components/toast";
import { InfiniteLoader } from "./components/infinite-loader";

type Image = {
  id: number;
  favorited: boolean;
  url: string;
};

let images: Image[] = [];

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" }));

app.get("/", async (c) => {
  return c.html(<Home />);
});

app.get("/search", async (c) => {
  // just return a random number of image,
  // in a random order based on the search query

  const numberOfImages = Math.floor(Math.random() * images.length - 1);
  const slicedImages = images.slice(0, numberOfImages);

  let shuffled = slicedImages
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  await new Promise((r) => setTimeout(r, 500));

  return c.html(
    <>
      {shuffled.map((image) => (
        <GridItem {...image} />
      ))}
    </>
  );
});

app.get("/images", async (c) => {
  const { page } = c.req.query();

  const start = (parseInt(page) - 1) * 30;

  const _images = Array.from({ length: 30 }, (_, i) => i + start).map((id) => ({
    id,
    favorited: false,
    url: `https://picsum.photos/200?${id}`,
  }));

  await new Promise((r) => setTimeout(r, 500));

  images.push(..._images);

  return c.html(
    <>
      {_images.map((image) => (
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

  if (index !== -1) {
    const image = images[index];
    image.favorited = !image.favorited;

    return c.html(
      <svg
        id={`heart-${id}`}
        hx-swap-oob="true"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={image.favorited ? "red" : "white"}
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    );
  }

  return c.html(<Toast text={`Action failed, please try again!`} />);
});

app.get("/settings", async (c) => {
  return c.html(<Settings />);
});

export default app;
