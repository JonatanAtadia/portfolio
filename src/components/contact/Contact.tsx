import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { Card } from './Card';
import { Form } from './Form';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>
        <p className='menuSections'>{t(`contact.header`)}</p>
        <h2 className='py-4'>{t(`contact.title`)}</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <Card />
          <Form />
        </div>
        <div className='flex justify-center py-12'>
          <a href='/#home'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
