import { Grid } from "./components/grid";
import { Search } from "./components/search";
import { SettingsLink } from "./components/settings-link";
import { Spinner } from "./components/spinner";
import { Layout } from "./layout";

export default function Home() {
  return (
    <Layout>
      <div class="w-full p-4">
        <h1 class="text-2xl font-semibold mb-4">Images Grid with Search</h1>

        <div class="flex flex-row items-center w-full gap-4 mb-6">
          <Search />

          <SettingsLink />
        </div>

        <Grid />

        <Spinner />

        <div id="toast"></div>
      </div>
    </Layout>
  );
}
