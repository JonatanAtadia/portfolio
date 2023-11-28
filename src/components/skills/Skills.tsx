import { SkillItem } from './SkillItem';
import { skillsList } from '../../constants.tsx';
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='menuSections'>{t(`skills.header`)}</p>
        <h2 className='py-4'>{t(`skills.title`)}</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillsList.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
