import { InputField } from './InputField';
import { useTranslation } from 'react-i18next';

export const Form = () => {
  const { t } = useTranslation();

  return (
    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
      <div className='p-4'>
        <form action=''>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <InputField label={t(`contact.form.name`)} type='text' />
            <InputField label={t(`contact.form.phone`)} type='text' />
          </div>

          <InputField label={t(`contact.form.email`)} type='email' />
          <InputField label={t(`contact.form.subject`)} type='text' />
          <InputField
            label={t(`contact.form.message`)}
            type='textarea'
            rows={10}
          />

          <button className='w-full p-4 text-gray-100 mt-4'>
            {t(`contact.form.button`)}
          </button>
        </form>
      </div>
    </div>
  );
};
