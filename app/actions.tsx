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
    <Link href={`/${anime.id}`} passHref>
      <AnimeCard key={anime.id} anime={anime} index={index} />
    </Link>
  ));
}
