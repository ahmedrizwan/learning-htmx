import { Spinner } from "./components/spinner";
import { Layout } from "./layout";

export default function Home() {
  return (
    <Layout>
      <div class="w-full p-4 h-screen">
        <h1 class="text-2xl font-semibold mb-4">Chat App</h1>
        <div class="flex flex-1 h-screen justify-center items-center">
          <form
            class="flex flex-col gap-4"
            hx-get="/room"
            hx-target="body"
            hx-push-url="true"
            hx-indicator="#spinner"
          >
            <input
              placeholder="Username"
              aria-label="user name"
              class="pl-10 pr-4 py-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              autofocus
              hx-trigger="change, keyup delay:500ms"
            />

            <button
              type="submit"
              class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Enter Chat
            </button>
          </form>
        </div>

        <Spinner />
      </div>
    </Layout>
  );
}
