import { StepButton } from '@/components/navigation-menu/step-button';

const NavigationContainer = () => {
  return (
    <div className={'flex'}>
      <div className={'gap-4 flex'}>
        <StepButton/>
        <StepButton direction={'next'}/>
      </div>
    </div>
  );
};

export { NavigationContainer };
