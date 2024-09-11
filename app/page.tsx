import { Appbar } from "./components/Appbar";
import { Providers } from "./provider";

export default function Home() {
  return (
    <Providers>
      <main>
        <Appbar />
      </main>
    </Providers>
  );
}
