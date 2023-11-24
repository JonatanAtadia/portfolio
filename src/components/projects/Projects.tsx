import { ProjectItem } from './ProjectItem';

const projectsList = [
  {
    title: 'titulo1',
    technology: 'tecnologias que utliza',
    imageSrc: './src/assets/FondoSmartFinance.jpg',
    projectUrl: '/property',
  },
  {
    title: 'titulo2',
    technology: 'tecnologias que utliza',
    imageSrc: './src/assets/FondoSmartFinance.jpg',
    projectUrl: '/property',
  },
  {
    title: 'titulo3',
    technology: 'tecnologias que utliza',
    imageSrc: './src/assets/FondoSmartFinance.jpg',
    projectUrl: '/property',
  },
  {
    title: 'titulo4',
    technology: 'tecnologias que utliza',
    imageSrc: './src/assets/FondoSmartFinance.jpg',
    projectUrl: '/property',
  },
];

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Build</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projectsList.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
