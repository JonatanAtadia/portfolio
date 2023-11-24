import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { Card } from './Card';
import { Form } from './Form';

export const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
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
