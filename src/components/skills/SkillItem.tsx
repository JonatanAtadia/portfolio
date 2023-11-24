interface SkillItemInfo {
  src: string;
  name: string;
}

export const SkillItem: React.FC<SkillItemInfo> = ({ src, name }) => {
  return (
    <div className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <img src={src} alt={name} width='64px' height='64px' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};
