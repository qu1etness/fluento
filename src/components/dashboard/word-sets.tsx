'use client'

import { SetsCard } from '@/components/dashboard/sets-card';
import { TitleSection } from '@/components/dashboard/title-section';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useRef, useState } from 'react';

const wordSetsList = [
  {
    gradient: 'bg-linear-to-tr/shorter from-[#8AD7F8] to-[#FA9182]',
    imagePath: '/assets/images/two-books.svg',
    title: 'Books and Library'
  },
  {
    gradient: 'bg-linear-to-r/srgb from-[#DA62A4]/80 from-10% to-80% to-[#8562F7]',
    imagePath: '/assets/images/compass.svg',
    title: 'Countries and cities'
  },
  {
    gradient: 'bg-linear-to-b/srgb from-[#93DCE9]/80 from-10% to-80% to-[#E583BE]',
    imagePath: '/assets/images/globe.svg',
    title: 'What is o\'clock now?'
  },
  {
    gradient: 'bg-linear-to-tr/shorter from-[#8AD7F8] to-[#FA9182]',
    imagePath: '/assets/images/two-books.svg',
    title: 'Books and Library'
  },
  {
    gradient: 'bg-linear-to-tr/shorter from-[#8AD7F8] to-[#FA9182]',
    imagePath: '/assets/images/two-books.svg',
    title: 'Books and Library'
  }
]

const WordSets = () => {

  const [emblaApi, setEmblaApi] = useState<CarouselApi>()

  const [canNext, setCanNext] = useState(wordSetsList.length > 3);
  const [canPrev, setCanPrev] = useState(false);

  const onNextClick = () => {
    emblaApi?.scrollNext();
  }

  const onPreviousClick = () => {
    emblaApi?.scrollPrev();
  };

  useEffect(() => {
    if (!emblaApi) return;

    const updateCanScroll = () => {
      setCanNext(emblaApi.canScrollNext());
      setCanPrev(emblaApi.canScrollPrev());
    };

    updateCanScroll();

    emblaApi.on('select', updateCanScroll);
    emblaApi.on('reInit', updateCanScroll);

    return () => {
      emblaApi.off('select', updateCanScroll);
      emblaApi.off('reInit', updateCanScroll);
    };
  }, [emblaApi]);

  return (
    <>
      <TitleSection title={'Word Sets'} onNextClick={onNextClick} onPreviousClick={onPreviousClick} canClickNext={canNext} canClickPrev={canPrev}/>
      <Carousel setApi={setEmblaApi} className={'col-span-3 justify-start items-center'}>
        <CarouselContent className={'gap-x-[3.5%] m-0'}>
          {wordSetsList.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-[31%] p-0 w-1/2">
              <SetsCard imagePath={item.imagePath} title={item.title} className={item.gradient} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export { WordSets };
