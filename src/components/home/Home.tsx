import { Social } from '../social/Social';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-w flex justify-center items-center'>
        <div>
          <p className='menuSections text-sm'>{t(`home.header`)}</p>
          <h1 className='py-3 text-gray-700'>{t(`home.title1`)}</h1>
          <h1 className='py-3 text-gray-700'>{t(`home.title2`)}</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            {t(`home.description`)}
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};
