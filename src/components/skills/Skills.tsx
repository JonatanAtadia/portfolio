import { SkillItem } from './SkillItem';

const skillsItems = [
  { src: './src/assets/skills/HTML.png', name: 'HTML' },
  { src: './src/assets/skills/CSS.png', name: 'CSS' },
  { src: './src/assets/skills/REACT.png', name: 'React' },
  { src: './src/assets/skills/VUE.png', name: 'Vue' },
];

export const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillsItems.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
