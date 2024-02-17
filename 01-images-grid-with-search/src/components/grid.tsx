export function Grid() {
  return (
    <>
      <div
        hx-get="/images?page=1"
        hx-trigger="load"
        hx-target="#results-grid"
        hx-swap="innerHTML"
        hx-indicator="#spinner"
      ></div>
      <div
        id="results-grid"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      ></div>
    </>
  );
}
