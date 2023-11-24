import { SkillItem } from './SkillItem';

export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillItem src='./src/assets/skills/HTML.png' name='HTML' />
          <SkillItem src='./src/assets/skills/CSS.png' name='CSS' />
          <SkillItem src='./src/assets/skills/REACT.png' name='REACT' />
          <SkillItem src='./src/assets/skills/VUE.png' name='VUE' />
        </div>
      </div>
    </div>
  );
};
