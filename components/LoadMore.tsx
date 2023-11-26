'use client';

import { fetchAnime } from '@/app/action';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IAnimeProp } from './AnimeCard';
import AnimeCardLists from './AnimeCardLists';

let page = 2;

function LoadMore() {
  const [data, setData] = useState<IAnimeProp[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchAnime({ page }).then((data) => {
        setData((prevData) => {
          const updatedData = [...prevData, ...data];

          return updatedData;
        });

        page++;
      });
    }
  }, [inView]);

  return (
    <>
      <AnimeCardLists data={data} />
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
