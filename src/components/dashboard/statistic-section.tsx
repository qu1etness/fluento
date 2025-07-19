import { IQuickCard, QuickStartCard } from '@/components/dashboard/quick-start-card';
import { StatisticChart } from '@/components/dashboard/statistic-chart';

const quickStarCardsData: IQuickCard[] = [
  {
    title: 'Exam',
    time: 20,
    imagePath: '/assets/images/student-cap.svg'
  },
  {
    title: 'Writing',
    time: 15,
    imagePath: '/assets/images/pencil.svg'
  },
  {
    title: 'Grammar',
    time: 17,
    imagePath: '/assets/images/folder.svg'
  },
];

const StatisticSection = () => {
  return (
    <>
      <StatisticChart/>
      <div className={'grid gap-3.5'}>
        {quickStarCardsData.map((item, index) => (
          <QuickStartCard imagePath={item.imagePath} title={item.title} time={item.time} key={index} index={index} />
        ))}
      </div>
    </>
  );
};

export { StatisticSection };
