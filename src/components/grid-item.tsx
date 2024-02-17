const imageItem = (url: string) => {
  return (
    <img
      src={url}
      width="400"
      height="300"
      class="object-cover w-full h-60 rounded-md"
      style="aspect-ratio: 400 / 300; object-fit: cover"
    />
  );
};

const heartItem = (favorited: boolean) => {
  return (
    <div class="absolute right-0 bottom-0 mb-3 mr-3 h-8 w-8 rounded-sm flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={favorited ? "red" : "white"}
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
  );
};

const optimisticHeartItem = (id: number, favorited: boolean) => {
  return (
    <div
      id={`optimistic-favorite-${id}`}
      class="my-indicator absolute right-0 bottom-0 mb-3 mr-3 h-8 w-8 rounded-sm flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={!favorited ? "red" : "white"}
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
  );
};

export function GridItem(props: {
  id: number;
  url: string;
  favorited: boolean;
}) {
  const { id, url, favorited } = props;

  return (
    <div
      class="relative group overflow-hidden hover:opacity-80 hover:cursor-pointer"
      hx-put={`/favorite?id=${id}`}
      hx-trigger="click"
      hx-swap="outerHTML"
      hx-indicator={`#optimistic-favorite-${id}`}
      id={id.toString()}
    >
      {imageItem(url)}
      {heartItem(favorited)}
      {optimisticHeartItem(id, favorited)}
    </div>
  );
}
