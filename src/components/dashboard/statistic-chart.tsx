'use client'
import { TitleSection } from '@/components/dashboard/title-section';
import { Chart } from '@/components/dashboard/chart';

const StatisticChart = () => {
  return (
    <>
      <TitleSection title={'Statistic'} className={'mt-5'} onNextClick={() => {
        console.log('previous');
      }} onPreviousClick={() => {
        console.log('next');
      }}>2022</TitleSection>
      <div className={'flex items-end'}>
        <h2 className={'font-bold text-2xl'}>Quick start</h2>
      </div>
      <Chart />
    </>
  );
};

export { StatisticChart };
