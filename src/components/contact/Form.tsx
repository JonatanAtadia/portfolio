import { InputField } from './InputField';

export const Form = () => {
  return (
    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
      <div className='p-4'>
        <form action=''>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <InputField label='Name' type='text' />
            <InputField label='Phone' type='text' />
          </div>

          <InputField label='Email' type='email' />
          <InputField label='Subject' type='text' />
          <InputField label='Message' type='textarea' rows={10} />

          <button className='w-full p-4 text-gray-100 mt-4'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
