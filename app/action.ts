import { IAnimeProp } from '@/components/AnimeCard';

type FetchAnimeParams = {
  page: number;
  limit?: number;
};

export const fetchAnime = async ({ page, limit = 8 }: FetchAnimeParams) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`
  );

  const data = (await res.json()) as IAnimeProp[];

  return data;
};
