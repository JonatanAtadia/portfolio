import { ProjectItem } from './ProjectItem';
import { projectsList } from '../../constants.tsx';

export const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='menuSections'>Projects</p>
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
