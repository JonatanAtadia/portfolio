import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='menuSections'>{t(`about.header`)}</p>
          <h2 className='py-4'>{t(`about.title`)}</h2>
          <p className='py-2 text-gray-600'>{t(`about.description`)}</p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            {t(`about.link`)}
          </p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src='./src/assets/FondoSmartFinance.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
