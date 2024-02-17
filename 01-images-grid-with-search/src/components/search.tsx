export function Search() {
  return (
    <>
      <div class="relative flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="absolute top-2 left-3 w-5 h-5 text-gray-500"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          placeholder="Search images"
          aria-label="Search"
          class="pl-10 pr-4 py-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          hx-get="/search"
          hx-target="#results-grid"
          hx-swap="innerHTML"
          hx-trigger="change, keyup delay:500ms"
          hx-indicator="#spinner"
        />
      </div>
    </>
  );
}
