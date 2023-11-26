import React from 'react';

import AnimeCard, { IAnimeProp } from './AnimeCard';

export type AnimeCardListsProps = {
  className?: string;
  data: IAnimeProp[];
};

const AnimeCardLists: React.FC<AnimeCardListsProps> = ({ className, data }) => {
  return (
    <section className={`anime-list ${className || ''}`}>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">
        {data.map((item: IAnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default AnimeCardLists;
