import { BackLink } from "./components/back-link";
import { Layout } from "./layout";

export default function Settings() {
  return (
    <Layout>
      <div class="w-full p-4">
        <div class="flex flex-row items-center gap-2 mb-4">
          <BackLink link="/" />
          <h1 class="text-2xl font-semibold">Hello from Settings!</h1>
        </div>
      </div>
    </Layout>
  );
}
