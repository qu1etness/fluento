import { WordSetsSection } from '@/components/dashboard/word-sets-section';
import { StatisticSection } from '@/components/dashboard/statistic-section';

const DashboardPage = () => {
  return (
    <div className={'grid grid-cols-4 gap-[2.5%] gap-y-7.5'}>
      <WordSetsSection/>
      <StatisticSection/>
    </div>
  );
};

export default DashboardPage;
