import { fetchAnime } from './action';

import LoadMore from '../components/LoadMore';
import AnimeCardLists from '@/components/AnimeCardLists';

async function Home() {
  const data = await fetchAnime({ page: 1 });

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <AnimeCardLists data={data} />
      <LoadMore />
    </main>
  );
}

export default Home;
