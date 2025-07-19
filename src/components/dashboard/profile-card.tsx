
interface IProfileInfo {
  name: string;
  surName: string;
  email: string;
  lessons: number;
  terms: number;
}

const profileInfo: IProfileInfo = {
  name: 'Annie',
  surName: 'Leonchart',
  email: 'annie_leonchart@mail.com',
  lessons: 24,
  terms: 1
}


const ProfileCard = () => {
  return (
    <div
      className={'rounded-4xl relative flex flex-col justify-center h-full bg-black-white mt-auto shadow-xl/20 shadow-[#3F2766]/10 p-5'}>
      <div className={'pt-9.5 text-center'}>
        <p className={'font-medium text-sm'}>{profileInfo.name + ' ' + profileInfo.surName}</p>
        <p className={'text-muted-foreground text-xs '}>{profileInfo.email}</p>
      </div>

      <div className={'flex justify-evenly mt-4.5'}>
        <div className={'flex flex-col justify-center items-center gap-2'}>
          <p className={'text-muted-foreground text-xs '}>Lessons</p>
          <span className={'font-bold'}>{profileInfo.lessons}</span>
        </div>
        <span className={'h-full w-[1px] bg-black/10'}></span>
        <div className={'flex flex-col justify-center items-center gap-2'}>
          <p className={'text-muted-foreground text-xs'}>Lessons</p>
          <span className={'font-bold'}>{profileInfo.terms}</span>
        </div>
      </div>
    <div className={'absolute top-[-30%] mx-auto right-0 left-0 z-10 bg-linear-to-br/longer from-[#93DCE9]/80 from-40% to-90% to-[#E583BE] w-25 h-25 rounded-full border-6 border-background'}></div>
    </div>
  );
};

export { ProfileCard };
