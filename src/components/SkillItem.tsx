interface SkillItemInfo {
  src: string;
  name: string;
}

export const SkillItem = (SkillItemInfo: SkillItemInfo) => {
  return (
    <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <img src={SkillItemInfo.src} alt='' width='64px' height='64px' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{SkillItemInfo.name}</h3>
        </div>
      </div>
    </div>
  );
};
