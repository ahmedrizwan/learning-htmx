import { Layout } from "./layout";

const message = {
  userName: "username",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus nec lorem scelerisque faucibus vel at magna. Vestibulum vel tortor eu justo tristique pellentesque. Ut eget volutpat urna. Maecenas ut nunc id urna cursus malesuada in in lacus. Sed eget sollicitudin velit. Donec magna ante, sollicitudin eget ultrices at, iaculis in ligula. Curabitur luctus ullamcorper nunc, sit amet ullamcorper libero malesuada quis. Nam nec posuere tellus, ut ultrices erat.",
};

export default function Room() {
  const messages = Array(50)
    .fill(0)
    .map((item) => message);

  return (
    <Layout>
      <div class="flex flex-col h-screen p-4">
        <h1 class="text-2xl font-semibold mb-4">Chat Room</h1>

        <div class="flex flex-1 h-full p-4 flex-col-reverse overflow-scroll">
          {messages.map((message, index) => (
            <div key={index} class="flex flex-row pt-2 pb-2">
              <h3 class="font-bold mr-2">{message.userName}:</h3>
              <p class="font-thin">{message.content}</p>
            </div>
          ))}
        </div>

        <form
          class="flex w-full gap-4"
          hx-get="/room"
          hx-target="body"
          hx-push-url="true"
          hx-indicator="#spinner"
        >
          <input
            placeholder="Enter your message here"
            aria-label="user name"
            class="flex-1 pl-10 pr-4 py-2 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            autofocus
            hx-trigger="change, keyup delay:500ms"
          />

          <button
            type="submit"
            class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}
