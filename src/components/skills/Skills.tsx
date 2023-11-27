import { SkillItem } from './SkillItem';
import { skillsList } from '../../constants.tsx';

export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillsList.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
