const Page = () => {
    return (
        <div className={'h-[300px]'}>
          <div className={'m-20 h-full rounded-3xl bg-blue-600 grid grid-cols-3 justify-items-center'}>
            {[...Array(5)].map((item, index) => (<div key={index} className={'w-2/3 m-5 rounded-4xl h-20 bg-white'}>
            </div>))}
          </div>
        </div>
    );
};

export default Page;
