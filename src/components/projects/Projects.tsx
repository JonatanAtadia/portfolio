import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Build</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='titulo del proyecto'
            technology='tecnologias que utliza'
            backgroundImg='./src/assets/FondoSmartFinance.jpg'
            projectUrl='/property'
          />
          <ProjectItem
            title='titulo del proyecto 2'
            technology='tecnologias que utliza'
            backgroundImg='./src/assets/FondoSmartFinance.jpg'
            projectUrl='link del proyecto 2'
          />
          <ProjectItem
            title='titulo del proyecto 3'
            technology='tecnologias que utliza'
            backgroundImg='./src/assets/FondoSmartFinance.jpg'
            projectUrl='link del proyecto 3'
          />
          <ProjectItem
            title='titulo del proyecto 4'
            technology='tecnologias que utliza'
            backgroundImg='./src/assets/FondoSmartFinance.jpg'
            projectUrl='link del proyecto 4'
          />
        </div>
      </div>
    </div>
  );
};
