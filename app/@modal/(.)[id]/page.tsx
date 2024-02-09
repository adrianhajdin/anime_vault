import Image from "next/image";

import { fetchAnime } from "@/app/actions";
import { Modal } from "@/components/Modal";
import FilledStarIcon from "@/public/filled_star.svg";
import BackButton from "@/components/BackButton";

async function PhotoModal({
  params: { id: animeId },
}: {
  params: { id: string };
}) {
  const anime = await fetchAnime(animeId);

  return (
    <Modal>
      <section className="mx-6 py-4 flex justify-between">
        <div className="flex w-full">
          {" "}
          <Image
            src={`https://shikimori.one/${anime.image.original}`}
            alt={anime.name}
            height={800}
            width={400}
            className="rounded-xl mr-6"
          />{" "}
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-evenly">
              <div className="flex justify-between items-center gap-1">
                <h2 className="font-bold text-white text-4xl line-clamp-1 w-full">
                  {anime.name}
                </h2>
                <div className="py-1 px-2 bg-[#161921] rounded-sm">
                  <p className="text-white text-sm font-bold capitalize">
                    {anime.kind}
                  </p>
                </div>
              </div>
              <div className="text-xl ml-2">{anime.japanese[0]}</div>
            </div>
            <div className="text-lg pl-3 pt-3 font-semibold">
              <div className="flex text-slate-300">
                Score:{" "}
                <p className="text-lg font-bold text-[#FFAD49] pl-2 flex items-center">
                  <Image
                    src={FilledStarIcon}
                    width={20}
                    height={20}
                    alt="stars"
                    className="mr-1"
                  />
                  {anime.score}
                </p>
              </div>
              <div className="flex">
                <div className="text-slate-300 mr-20">
                  Number of Episodes:{" "}
                  <span className="text-white">
                    {anime.episodes ?? "Until Now"}
                  </span>
                </div>
                <div className="text-slate-300">
                  Episodes Duration:{" "}
                  <span className="text-white">{anime.duration}min.</span>
                </div>
              </div>
              <div className="text-slate-300">
                Release Date:{" "}
                <span className="text-white">{anime.released_on}</span>
              </div>
              <div className="text-slate-300">
                Studio:{" "}
                <span className="text-white">{anime.studios[0].name}</span>
              </div>
            </div>
          </div>
        </div>
        <BackButton />
      </section>
    </Modal>
  );
}

export default PhotoModal;
