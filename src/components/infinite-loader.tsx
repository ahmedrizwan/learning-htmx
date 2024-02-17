export function InfiniteLoader(props: { page: number }) {
  return (
    <div
      hx-get={`/images?page=${props.page}`}
      hx-trigger="revealed"
      hx-swap="outerHTML"
      class="col-span-full flex flex-row justify-center"
    >
      Loading Page {props.page}
    </div>
  );
}
