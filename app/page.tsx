import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { fetchAnimes } from "./actions";
import LoadMore from "../components/LoadMore";

async function Home() {
  const data = await fetchAnimes(1);

  return (
    <>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>
      <Footer />
    </>
  );
}

export default Home;
