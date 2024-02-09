"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import Link from "next/link";

const MAX_LIMIT = 8;

export async function fetchAnimes(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data.map((anime: AnimeProp, index: number) => (
    <Link href={`/${anime.id}`} passHref key={anime.id}>
      <AnimeCard anime={anime} index={index} />
    </Link>
  ));
}

export async function fetchAnime(id: string) {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);

  const data = await response.json();

  return data;
}
