import React, { useEffect, useRef, useState } from 'react';

import { CarteRecord, EtapeRecord } from '~/generated/sdk';
import { useHorizontalScroll } from '~/utils/useHorizontalScroll';

import Etape from '../Etape';

export type CarteRatio = { ratioX: number; ratioY: number };

const Carte = ({ carte, etapes }: { carte: CarteRecord; etapes: EtapeRecord[] }) => {
  const carteRef = useRef<HTMLImageElement>(null);
  const scrollRef = useHorizontalScroll();
  const [ratio, setRatio] = useState<CarteRatio | undefined>();

  useEffect(() => {
    if (carteRef.current && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: carteRef.current.getBoundingClientRect().width / 2 - window.innerWidth / 2,
      });
    }
  }, [carteRef, scrollRef]);

  useEffect(() => {
    if (carteRef.current && carte.image) {
      setRatio({
        ratioX: carteRef.current.getBoundingClientRect().width / carte.image.width,
        ratioY: carteRef.current.getBoundingClientRect().height / carte.image.height,
      });
    }
  }, [carte.image, carte.image?.height, carte.image?.width, carteRef]);

  if (!carte.image) return null;
  return (
    <div
      className="relative h-screen overflow-x-auto md:overflow-x-hidden overflow-y-hidden"
      ref={scrollRef}
    >
      <div className="relative md:absolute">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={carte.image?.url}
          alt="fond de carte"
          className="h-screen max-w-none"
          ref={carteRef}
        />
        {ratio &&
          etapes.map((etape, index) => {
            return <Etape key={index} etape={etape} carteRatio={ratio} />;
          })}
      </div>
    </div>
  );
};

export default Carte;
